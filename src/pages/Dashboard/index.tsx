import React, {FormEvent, useState } from 'react'
import {Form, Repositories, Title} from './style'
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
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const {data: repository} = await api.get<Repository>(`repos/${newRepo}`);

        setRepositories([...repositories, repository]);
        setNewRepo('');
    }

    return (
        <>
            <img src={logImg} alt="Github Explorer"/>
            <Title>Explore Repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder='Digite o nome do repositório'
                />
                <button type="submit">Pesqusiar</button>
            </Form>

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
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
