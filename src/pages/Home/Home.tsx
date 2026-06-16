import TagInfo from "../../components/TagInfo";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";

import {
  MapPin,
  Briefcase,
  Download,
  Mail,
} from 'lucide-react';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/douglas-teixeira-magalh%C3%A3es-8139a3251/",
  github: "https://github.com/Douglastm",
  instagram: "https://www.instagram.com/_dougras_7/",
};

import ProfilePhoto from "../../../public/Profile_photo.jpeg";

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.info}>
            <div className={styles.tags_container}>
              <TagInfo 
                icon={MapPin}
                label="Cascavel - PR"
              />
              <TagInfo 
                icon={Briefcase}
                label="Analista de Suporte - TOTVS"
              />
            </div>
            <div className={styles.text_presentation}>
              Olá <span className={styles.hand_wave}>👋</span>, eu sou
            </div>
            <div className={styles.title_container}>
              <h1 className={styles.title}>
                <span className={styles.title_line}>Douglas T.</span>
                <span className={styles.title_line}>Magalhães</span>
              </h1>
            </div>
            <div>
              <p className={styles.paragraph}>Desenvolvedor FullStack & Analista de suporte na TOTVS. Acadêmico na universidade UNIVEL.</p>
            </div>
            <div className={styles.actions}>
              <a
                href="/cv.pdf"
                download="Douglas-Teixeira-Magalhaes-CV.pdf"
                className={`${styles.button} ${styles.button_primary}`}
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
              <Link to="/contact" className={`${styles.button} ${styles.button_secondary}`}>
                <Mail size={18} />
                <span>Contate-me</span>
              </Link>
            </div>
            <div className={styles.social_section}>
              <h6 className={styles.social_title}>Minhas Redes:</h6>
              <div className={styles.social_links}>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={styles.social_link}
                >
                  <FaLinkedin className={styles.social_icon} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={styles.social_link}
                >
                  <FaGithubSquare className={styles.social_icon} />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={styles.social_link}
                >
                  <FaInstagramSquare className={styles.social_icon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.photo_content}>
            <img src={ProfilePhoto} alt="Foto de perfil" className={styles.profile_photo} />
          </div>
        </section>
      </div>
    </>
  );
}
