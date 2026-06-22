import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Briefcase,
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
} from "lucide-react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import styles from "./Contact.module.css";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "douglasteixeiramagalhaes@gmail.com",
    href: "mailto:douglasteixeiramagalhaes@gmail.com",
    description: "Para propostas, freelas e oportunidades de trabalho.",
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/douglas-teixeira-magalhaes",
    href: "https://www.linkedin.com/in/douglas-teixeira-magalh%C3%A3es-8139a3251/",
    description: "Melhor canal para networking e conversas profissionais.",
  },
  {
    icon: <FaGithubSquare size={20} />,
    label: "GitHub",
    value: "github.com/Douglastm",
    href: "https://github.com/Douglastm",
    description: "Código, experimentos e projetos publicados.",
  },
  {
    icon: <FaInstagramSquare size={20} />,
    label: "Instagram",
    value: "@_dougras_7",
    href: "https://www.instagram.com/_dougras_7/",
    description: "Um canal mais leve para acompanhar meu dia a dia.",
  },
];

const highlights = [
  {
    icon: Briefcase,
    title: "Projetos sob medida",
    text: "Landing pages, interfaces web e soluções full stack com foco em resultado.",
  },
  {
    icon: MessageCircleMore,
    title: "Comunicação direta",
    text: "Alinhamento claro, andamento visível e decisões técnicas bem explicadas.",
  },
  {
    icon: Clock3,
    title: "Retorno rápido",
    text: "Respondo com agilidade para tirar a conversa do rascunho e levar para ação.",
  },
];

export default function Contact() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>
            <MapPin size={16} />
            <span>Cascavel - PR, Brasil</span>
          </div>

          <h1 className={styles.title}>
            Vamos tirar sua
            <span className={styles.titleAccent}> próxima ideia</span>
            <br />
            do papel.
          </h1>

          <p className={styles.description}>
            Se você precisa de uma interface forte, uma aplicação bem estruturada
            ou alguém para evoluir um produto com atenção aos detalhes, este é o
            melhor ponto de partida.
          </p>

          <div className={styles.actions}>
            <a
              href="mailto:douglastmagalhaes.dev@gmail.com"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              <Mail size={18} />
              <span>Enviar email</span>
            </a>
            <Link
              to="/projects"
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              <span>Ver projetos</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelKicker}>Canais de contato</span>
              <h2 className={styles.panelTitle}>Escolha a forma que fizer mais sentido</h2>
            </div>

            <div className={styles.contactList}>
              {contactLinks.map(({ icon, label, value, href, description }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon}>
                    {icon}
                  </div>
                  <div className={styles.contactCopy}>
                    <span className={styles.contactLabel}>{label}</span>
                    <strong className={styles.contactValue}>{value}</strong>
                    <p className={styles.contactDescription}>{description}</p>
                  </div>
                  <ArrowUpRight size={18} className={styles.contactArrow} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.panelKicker}>Como eu trabalho</span>
              <div className={styles.highlightList}>
                {highlights.map(({ icon: Icon, title, text }) => (
                  <div key={title} className={styles.highlightItem}>
                    <div className={styles.highlightIcon}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className={styles.highlightTitle}>{title}</h3>
                      <p className={styles.highlightText}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <span className={styles.panelKicker}>Disponibilidade</span>
              <p className={styles.availabilityText}>
                Aberto para oportunidades como desenvolvedor front-end, full
                stack e projetos freelance com foco em experiência digital e
                produto.
              </p>
              <a
                href="mailto:douglasteixeiramagalhaes@gmail.com?subject=Vamos%20conversar"
                className={styles.availabilityLink}
              >
                Iniciar conversa
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
