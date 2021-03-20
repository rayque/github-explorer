import React, {useEffect, useState} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import logImg from './../../assets/logo-github.svg'
import {Header, Issues, RepositoryInfo} from './styles';
import {FiChevronLeft} from "react-icons/all";
import {FiChevronRight} from "react-icons/fi";
import api from "../../services/api";

interface RepositoryParams {
    repository: string
}

interface Repository {
    full_name: string
    description: string
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    owner: {
        login: string
        avatar_url: string
    }
}

interface Issue {
    id: number
    title: string
    html_url: string
    user: {
        login: string
    }
}

const Repository: React.FC = () => {
    const [repository, setrepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    const {params} = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`/repos/${params.repository}`)
            .then(({data}) => {
                setrepository(data);
            })
        api.get(`/repos/${params.repository}/issues`)
            .then(({data}) => {
                setIssues(data)
            })
    }, [params.repository])


    return (
        <>
            <Header>
                <img src={logImg} alt="Github Explorer"/>
                <Link to={'/'}>
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            {repository &&
            <RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>stars</span>
                    </li>
                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>
            }

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} target='_blank' href={issue.html_url}>
                        <div>
                            <strong> {issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
