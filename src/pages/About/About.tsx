import { useState } from "react";

import styles from "./About.module.css"

import ProfilePhoto from "../../../public/Profile_photo.jpeg";
import TimelineCard from "../../components/TimelineCard";
import ExperienceModal, {
  type ExperienceDetails,
} from "../../components/ExperienceModal";

const experiences: ExperienceDetails[] = [
  {
    startDate: "03/2025",
    endDate: "07/2026",
    company: "TOTVS",
    role: "Analista de suporte.",
    summary:
      "Atuação focada em suporte técnico para sistemas corporativos, análise de incidentes e investigação de integrações com foco em estabilidade operacional.",
    highlights: [
      "Análise e resolução de incidentes reportados por clientes e times internos.",
      "Investigação de falhas em integrações e identificação de causa raiz.",
      "Apoio técnico em sistemas corporativos com documentação de fluxos e ocorrências.",
    ],
  },
  {
    startDate: "08/2022",
    endDate: "02/2025",
    company: "Daniel Fotografias",
    role: "Fotógrafo e editor de fotos e vídeos.",
    summary:
      "Trabalho voltado para cobertura fotográfica, direção visual e pós-produção de materiais para clientes e eventos.",
    highlights: [
      "Captação de fotos e vídeos em ensaios e eventos.",
      "Edição e tratamento de imagens com foco em consistência visual.",
      "Organização de entregas, alinhamento com clientes e manutenção do padrão de qualidade.",
    ],
  },
];

export default function About() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetails | null>(null);

  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sobre mim</h1>
          <div className={styles.container_who_is}>
            <div className={styles.conainer_photo}>
              <img
                src={ProfilePhoto}
                alt="Foto de Perfil"
                className={styles.photo}
              />
              <span className={styles.label}>Quem é Douglas?</span>
            </div>
            <div className={styles.timeline_block}>
              <h3 className={styles.subtitle}>Experiências</h3>
              <div className={styles.timeline_list}>
                {experiences.map((experience) => (
                  <TimelineCard
                    key={`${experience.company}-${experience.startDate}`}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    company={experience.company}
                    role={experience.role}
                    onClick={() => setSelectedExperience(experience)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.presentation}>
            <p className={styles.text_presentation}>
              Sou Desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas, com mais de 4 anos de experiência prática em desenvolvimento de software. Tenho foco principalmente em Java, Spring Boot, APIs REST, React e TypeScript, buscando construir aplicações organizadas, escaláveis e com boas práticas de desenvolvimento.
              <br />
              <br />
              Possuo experiência no desenvolvimento de APIs e sistemas web, trabalhando com Java, Spring Boot, PostgreSQL, MySQL, Docker e autenticação utilizando JWT. No frontend, desenvolvo interfaces modernas utilizando React, Next.js, JavaScript e TypeScript, além de possuir experiência com React Native para aplicações mobile.
              <br />
              <br />
              Minha experiência profissional também me proporcionou uma forte capacidade de análise e resolução de problemas, investigação de falhas, identificação de causa raiz, integração entre sistemas e compreensão de regras de negócio. Essa combinação entre desenvolvimento e suporte me permite enxergar não apenas o código, mas também o problema que a aplicação precisa resolver.
              <br />
              <br />
              Tenho experiência com Git, documentação, integração de APIs, bancos de dados e deploy em ambientes cloud, além de estar constantemente desenvolvendo projetos próprios para aprimorar meus conhecimentos e transformar aprendizado em aplicações reais.
              <br />
              <br />
              Atualmente, busco novas oportunidades como Desenvolvedor Java / Full Stack, onde possa aplicar meus conhecimentos, continuar evoluindo tecnicamente e contribuir para a construção de soluções que gerem valor real para empresas e usuários.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      {selectedExperience ? (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      ) : null}
    </div>
  );
}
