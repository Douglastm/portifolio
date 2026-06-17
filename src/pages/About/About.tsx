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
    endDate: "Atualmente",
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
              Sou Analista de Suporte na TOTVS e estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento de software. Atuo há mais de 1 ano na análise e resolução de incidentes, investigação de integrações, identificação de causa raiz e suporte técnico para sistemas corporativos.
              <br />
              <br />
              Estudo desenvolvimento de software há mais de 4 anos, construindo projetos web e mobile com foco em qualidade, escalabilidade e boas práticas. Possuo experiência no desenvolvimento de APIs REST utilizando Java, Spring Boot, PostgreSQL, MySQL e Docker, além da criação de interfaces modernas com React, Next.js, JavaScript e TypeScript.
              <br />
              <br />
              Também tenho experiência com React Native, integração de APIs, versionamento com Git, documentação de sistemas e deploy em ambientes cloud. Minha vivência em suporte e desenvolvimento me proporciona uma visão completa dos processos, permitindo compreender problemas de negócio e transformá-los em soluções eficientes.
              <br />
              <br />
              Estou sempre em busca de novos desafios, aprendizado contínuo e oportunidades para evoluir como desenvolvedor Full Stack, contribuindo com projetos que gerem impacto real para empresas e usuários.
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
