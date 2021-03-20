import React, {FormEvent, useEffect, useState} from 'react'
import {Error, Form, Repositories, Title} from './style'
import logImg from './../../assets/logo-github.svg'
import {FiChevronRight} from 'react-icons/fi'
import api from '../../services/api';

interface Repository {
    full_name: string
    description: string
    owner: {
        login: string
        avatar_url: string
    }
}

const Dashboard: React.FC = () => {
    const storageName = '@githubExplorer:respositories';
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem(storageName)

        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(storageName, JSON.stringify(repositories))
    }, [repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        if (!newRepo) {
            setInputError('Digite o autor/repositório');
            return;
        }
        try {
            const {data: repository} = await api.get<Repository>(`repos/${newRepo}`);

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (e) {
            setInputError(e.response.data.message);
        }
    }

    return (
        <>
            <img src={logImg} alt="Github Explorer"/>
            <Title>Explore Repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder='Digite o nome do repositório'
                />
                <button type="submit">Pesqusiar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="http://">

                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>

                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
