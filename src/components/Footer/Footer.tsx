import styles from "./Footer.module.css";

import { Link, useLocation } from "react-router-dom";

import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

import Logo from "../../assets/images/Logo.png";

const socialLinks = {
    linkedin: "https://www.linkedin.com/in/douglas-teixeira-magalh%C3%A3es-8139a3251/",
    github: "https://github.com/Douglastm",
    instagram: "https://www.instagram.com/_dougras_7/",
};

export default function Footer() {
    const location = useLocation();

    const websiteLinks = [
        { path: "/", label: "Início" },
        { path: "/about", label: "Sobre" },
        { path: "/projects", label: "Projetos" },
        { path: "/contact", label: "Contato" },
    ];

    const legalLinks = [
        { path: "/privacy-policy", label: "Politica e Privacidade" },
        { path: "/rights", label: "Direitos" },
    ];

    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.info_container}>
                        <div className={styles.logo}>
                            <img src={Logo} alt="" width={50} height={50}/>
                            <h2>Douglas</h2>
                        </div>
                        <div className={styles.description}>
                            <p>Possuo 4 anos de experiência em desenvolvimento de software e atuo há 1 ano e 3 meses como Analista de Suporte, adquirindo experiência em atendimento técnico, resolução de problemas, análise de sistemas e suporte ao usuário.</p>
                        </div>
                        <div className={styles.icons_container}>
                            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className={styles.icon} />
                            </a>
                            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithubSquare className={styles.icon} />
                            </a>
                            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                                <FaInstagramSquare className={styles.icon} />
                            </a>
                        </div>
                        <div className={styles.button_container}>
                            <Link to="/contact" className={styles.button}>Contate-me</Link>
                        </div>
                    </div>
                    <div className={styles.links_container}>
                        <ul className={styles.map_website}>
                            <li className={styles.title_list}>Mapa do Portifólio</li>
                            {websiteLinks.map(({ path, label }) => {
                                const isActive = location.pathname === path;

                                return (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className={`${styles.footer_link} ${
                                                isActive ? styles.active_link : ""
                                            }`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className={styles.legal_terms}>
                            <li className={styles.title_list}>Termos Legais</li>
                            {legalLinks.map(({ path, label }) => {
                                const isActive = location.pathname === path;

                                return (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className={`${styles.footer_link} ${
                                                isActive ? styles.active_link : ""
                                            }`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.rights_reserved}>
                        <p>© 2026 Douglas Magalhães • Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
