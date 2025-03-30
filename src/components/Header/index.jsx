import { useState } from "react";
import styled from 'styled-components';
import LinkNavBarComponent from '../LinkNavBar';

import { FiMoon } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { CgMenu, CgClose  } from "react-icons/cg";

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

    .first-nav a {
        color: var(--black-color);
        text-decoration: none;
        transition: color 0.3s;
    }

    .first-nav a:hover {
        color: var(--green-color);
    }

    .second-nav {
        display: none;
    }

    .moon {
        justify-self: center;
    }

    @media (max-width: 768px) {
        top: 90vh;

        .first-nav {
            width: 100%;
            height: 64vh;
            position: fixed;

            bottom: 10vh;

            display: none; /* Default to hidden on small screens */

            background-color: var(--white-color);
        }

        .first-nav.open {
            display: flex; /* Show when the 'open' class is applied */
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .second-nav {
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 40px;
        }

        .menu, .home {
            cursor: pointer;
            transition: .5s;
        }

        .menu:hover, .home:hover {
            color: var(--green-color);
        }
    }
`;

const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return(
        <Header>
            <nav className={`first-nav ${isMenuOpen ? 'open' : ''}`}> {/* Apply 'open' class conditionally */}
                <LinkNavBarComponent link='#' text='Início' />
                <LinkNavBarComponent link='#' text='Sobre' />
                <LinkNavBarComponent link='#' text='Projetos' />
                <LinkNavBarComponent link='#' text='Contato' />
                <div>
                    <FiMoon size={30} className='moon'/>    
                </div>
            </nav>
            <nav className='second-nav'>
                <AiFillHome size={38} className='home'/>
                <div className='menu' onClick={toggleMenu}>
                    {isMenuOpen ? <CgClose size={38} /> : <CgMenu size={38} />}
                </div>
            </nav>
        </Header>
    );
};

export default HeaderComponent;