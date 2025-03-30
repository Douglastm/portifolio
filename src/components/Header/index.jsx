import styled from 'styled-components';
import LinkNavBarComponent from '../LinkNavBar';

import { FiMoon } from "react-icons/fi";

import { AiFillHome } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";


const Header = styled.header`
    width: 100%;
    height: 10vh;

    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--white-color);
    box-shadow: 0px 0px 83px -10px rgba(0,0,0,0.75);

    .first-nav {
        height: 10vh;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        margin: 0 20px;
    }

    .second-nav {
        display: none;
    }

    @media (max-width: 768px) {
        top: 90vh;

        .first-nav {
            display: none;
        }

        .second-nav {
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 40px;
        }
    }
`;

const HeaderComponent = () => {
    return(
        <Header>
            <nav className='first-nav'>
                <LinkNavBarComponent link='#' text='Início' />
                <LinkNavBarComponent link='#' text='Sobre' />
                <LinkNavBarComponent link='#' text='Projetos' />
                <LinkNavBarComponent link='#' text='Contato' />
                <FiMoon size={24}/>
            </nav>
            <nav className='second-nav'>
                <AiFillHome size={38}/>
                <CgMenu size={38}/>
            </nav>
        </Header>
    );
};

export default HeaderComponent;