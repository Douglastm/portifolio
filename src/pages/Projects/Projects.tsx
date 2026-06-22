import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Blocks,
  Code2,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import styles from "./Projects.module.css";

const capabilities = [
  {
    icon: Layers3,
    title: "Interfaces com intenção",
    text: "Telas que equilibram estética, legibilidade e conversão sem cair em layout genérico.",
  },
  {
    icon: Code2,
    title: "Código organizado",
    text: "Componentização, consistência visual e atenção a manutenção desde a primeira entrega.",
  },
  {
    icon: ShieldCheck,
    title: "Base sólida de produto",
    text: "Fluxos com foco em estabilidade, clareza técnica e evolução contínua do projeto.",
  },
];

const projectTypes = [
  {
    icon: Rocket,
    label: "Landing pages",
    description: "Páginas rápidas, diretas e pensadas para gerar ação.",
  },
  {
    icon: Blocks,
    label: "Sistemas web",
    description: "Dashboards, áreas autenticadas e interfaces para operação.",
  },
  {
    icon: Smartphone,
    label: "Experiências responsivas",
    description: "Layouts que funcionam bem no desktop e no mobile.",
  },
];

export default function Projects() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Projetos</span>
            <h1 className={styles.title}>
              Trabalho em produtos digitais com
              <span className={styles.titleAccent}> forma, lógica e impacto.</span>
            </h1>
            <p className={styles.description}>
              Minha atuação combina front-end, back-end e visão de produto para
              transformar ideias em experiências objetivas, utilizáveis e bem
              construídas.
            </p>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <strong>4+ anos</strong>
              <span>estudando e construindo software</span>
            </div>
            <div className={styles.statCard}>
              <strong>Java + React</strong>
              <span>como eixo principal das entregas</span>
            </div>
            <div className={styles.statCard}>
              <strong>Web e APIs</strong>
              <span>com foco em escalabilidade e clareza</span>
            </div>
          </div>
        </div>

        <div className={styles.projectsHeader}>
          <div>
            <span className={styles.sectionKicker}>Em breve</span>
            <h2 className={styles.sectionTitle}>Projetos em preparação</h2>
          </div>
          <Link to="/contact" className={styles.inlineLink}>
            Conversar sobre um projeto
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Cards de projetos ocultos temporariamente até a publicação dos cases. */}
        {/* <div className={styles.projectsGrid}>...</div> */}

        <div className={styles.comingSoonCard}>
          <div className={styles.comingSoonBadge}>
            <Rocket size={18} />
            <span>Projetos em breve</span>
          </div>
          <h3 className={styles.comingSoonTitle}>
            Estou organizando os próximos cases para publicar aqui.
          </h3>
          <p className={styles.comingSoonText}>
            Em breve esta seção terá projetos com mais contexto, decisões
            técnicas, resultados e detalhes de implementação.
          </p>
        </div>

        <div className={styles.bottomGrid}>
          <div className={styles.panel}>
            <span className={styles.sectionKicker}>Como eu penso</span>
            <h2 className={styles.sectionTitle}>Qualidade antes de volume</h2>
            <div className={styles.capabilityList}>
              {capabilities.map(({ icon: Icon, title, text }) => (
                <div key={title} className={styles.capabilityItem}>
                  <div className={styles.capabilityIcon}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className={styles.capabilityTitle}>{title}</h3>
                    <p className={styles.capabilityText}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.panel}>
              <span className={styles.sectionKicker}>O que eu entrego</span>
              <div className={styles.typeList}>
                {projectTypes.map(({ icon: Icon, label, description }) => (
                  <div key={label} className={styles.typeItem}>
                    <Icon size={18} />
                    <div>
                      <strong>{label}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.panel} ${styles.ctaPanel}`}>
              <span className={styles.sectionKicker}>Próximo passo</span>
              <h2 className={styles.ctaTitle}>Se quiser, o próximo projeto pode entrar aqui.</h2>
              <p className={styles.ctaText}>
                Estou disponível para construir interfaces, APIs e experiências
                digitais com foco real em entrega.
              </p>
              <a
                href="mailto:douglastmagalhaes.dev@gmail.com?subject=Novo%20projeto"
                className={styles.ctaButton}
              >
                <Mail size={18} />
                <span>Falar sobre projeto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
