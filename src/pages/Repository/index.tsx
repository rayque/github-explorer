import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import logImg from './../../assets/logo-github.svg'
import {Header, Issues, RepositoryInfo} from './styles';
import {FiChevronLeft} from "react-icons/all";
import {FiChevronRight} from "react-icons/fi";

interface RepositoryParams {
    repository: string
}

const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logImg} alt="Github Explorer"/>
                <Link to={'/'}>
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src={logImg} alt="Github Explorer"/>
                    <div>
                        <strong>rayque/foobar</strong>
                        <p>description</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>2222</strong>
                        <span>stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>2222</strong>
                        <span>Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to={`/repository/}`}>
                    <div>
                        <strong>full_name</strong>
                        <p>description</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
