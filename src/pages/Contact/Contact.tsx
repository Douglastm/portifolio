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
    description: "Para processos seletivos, entrevistas e oportunidades em tecnologia.",
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
    title: "Foco em software",
    text: "Conhecimentos em front-end, back-end, APIs REST e bancos de dados para produtos digitais.",
  },
  {
    icon: MessageCircleMore,
    title: "Trabalho em equipe",
    text: "Comunicação clara, abertura a feedbacks e interesse em colaborar com diferentes áreas.",
  },
  {
    icon: Clock3,
    title: "Aprendizado contínuo",
    text: "Curiosidade técnica e compromisso em evoluir processos, código e produtos constantemente.",
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
            Vamos construir
            <span className={styles.titleAccent}> bons produtos</span>
            <br />
            juntos.
          </h1>

          <p className={styles.description}>
            Estou em busca de uma oportunidade em uma empresa de software para
            contribuir com produtos digitais, aprender com profissionais experientes
            e gerar impacto por meio da tecnologia.
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
              <h2 className={styles.panelTitle}>Vamos conversar sobre oportunidades no seu time</h2>
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
                Disponível para oportunidades como desenvolvedor front-end,
                back-end ou full stack, em equipes que valorizem colaboração,
                qualidade de código e evolução profissional.
              </p>
              <a
                href="mailto:douglasteixeiramagalhaes@gmail.com?subject=Oportunidade%20profissional"
                className={styles.availabilityLink}
              >
                Entrar em contato
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
