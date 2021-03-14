import React from 'react'
import {Form, Repositories, Title} from './style'
import logImg from './../../assets/logo-github.svg'
import {FiChevronRight} from 'react-icons/fi'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logImg} alt="Github Explorer"/>
            <Title>Explore Repositórios no Github</Title>

            <Form>
                <input placeholder='Digite o nome do repositório'/>
                <button type="submit">Pesqusiar</button>
            </Form>

            <Repositories>
                <a href="http://">

                    <img
                        src="https://avatars.githubusercontent.com/u/18473579?s=460&u=8f5d2c005facd3015b8d52778f449f2580cb6584&v=4"
                        alt="Rayque"
                    />
                    <div>
                        <strong>Bible Bowl</strong>
                        <p>Bible Bowl repository</p>

                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="http://">

                    <img
                        src="https://avatars.githubusercontent.com/u/18473579?s=460&u=8f5d2c005facd3015b8d52778f449f2580cb6584&v=4"
                        alt="Rayque"
                    />
                    <div>
                        <strong>Bible Bowl</strong>
                        <p>Bible Bowl repository</p>

                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="http://">

                    <img
                        src="https://avatars.githubusercontent.com/u/18473579?s=460&u=8f5d2c005facd3015b8d52778f449f2580cb6584&v=4"
                        alt="Rayque"
                    />
                    <div>
                        <strong>Bible Bowl</strong>
                        <p>Bible Bowl repository</p>

                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
