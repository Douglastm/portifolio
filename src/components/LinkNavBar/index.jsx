import styled from "styled-components";

const LinkStyle = styled.a`
    position: relative;

    margin: 10px 10px;
    padding: 2px 15px;

    border-radius: 30px;

    font-size: 22px;

    text-decoration: none;

    color: var(--black-color);

    &:after {
        content: "";
        position: absolute;
        background-color: var(--green-color);
        height: 2px;
        width: 0;
        left: 0;
        bottom: 0px;
        transition: 0.3s;
    }

    &:hover:after {
        width: 100%;
    }

    @media (max-width: 768px) {
        margin: 0;
        padding: 50px;

        justify-self: center;

        &:after {
            display: none;
        }

        &:hover:after {
            display: none;
        }
    }
`;

const LinkNavBarComponent = ({ link, text }) => {
    return(
        <LinkStyle href={link}>{text}</LinkStyle>
    );
};

export default LinkNavBarComponent;