import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Blocks,
  Code2,
  Layers3,
  Mail,
  Monitor,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import styles from "./Projects.module.css";
import ProjectModal, { type ProjectDetails } from "../../components/ProjectModal";

const FrontendProjectImage = "/Frontend_project.png";
const BackendProjectImage = "/Backend_project.png";

const projects: ProjectDetails[] = [
  {
    icon: Monitor,
    category: "Frontend",
    title: "Sales System — Frontend",
    description:
      "Interface web para gestão comercial: clientes, produtos, categorias, usuários, vendas e formas de pagamento.",
    stack: ["React 19", "TypeScript", "Vite", "React Router DOM", "Axios", "CSS Modules", "React Icons"],
    status: "Concluído",
    year: "2026",
    role: "Front-end Developer",
    backgroundClassName: styles.projectVisualOps,
    image: FrontendProjectImage,
    summary:
      "Interface web do Sales System, um sistema de gestão comercial desenvolvido para gerenciamento de clientes, produtos, categorias, usuários, vendas e métodos de pagamento. Construída em React, TypeScript e Vite, consumindo uma API REST em Java Spring Boot.",
    challenge:
      "Organizar múltiplos domínios de negócio (clientes, produtos, categorias, vendas, pagamentos e usuários) em uma única aplicação mantendo navegação clara, formulários consistentes e uma comunicação confiável com a API autenticada por JWT.",
    solution:
      "Estruturação da aplicação em módulos por domínio, camada de serviços com Axios para centralizar as chamadas à API, rotas protegidas com React Router DOM e componentização com CSS Modules para manter consistência visual entre as telas.",
    highlights: [
      "CRUD completo de clientes, produtos, categorias, usuários e formas de pagamento.",
      "Fluxo de vendas integrado à API REST com autenticação via JWT.",
      "Camada de serviços com Axios para centralizar a comunicação com o back-end.",
      "Interface construída com React 19, TypeScript e Vite.",
    ],
    links: [
      { label: "Ver repositório", href: "https://github.com/Douglastm/Sales-System-Frontend" },
    ],
  },
  {
    icon: Server,
    category: "Backend",
    title: "Sales System — API",
    description:
      "API REST em Spring Boot para vendas, clientes, produtos, categorias e formas de pagamento, com autenticação via JWT.",
    stack: ["Java 21", "Spring Boot 4", "PostgreSQL", "JWT", "springdoc-openapi", "Lombok", "JUnit 5 + Mockito"],
    status: "Concluído",
    year: "2026",
    role: "Back-end Developer",
    backgroundClassName: styles.projectVisualApi,
    image: BackendProjectImage,
    summary:
      "API REST desenvolvida com Spring Boot para gerenciamento de vendas, clientes, produtos, categorias, formas de pagamento e usuários, com autenticação e autorização via JWT.",
    challenge:
      "Modelar um domínio de vendas com múltiplas entidades relacionadas (clientes, produtos, categorias, pagamentos) garantindo autenticação segura, validação consistente dos dados e uma API documentada e testável.",
    solution:
      "Camadas bem definidas com Spring Web, Spring Data JPA e Bean Validation, autenticação e autorização via Spring Security com JWT, persistência em PostgreSQL, documentação automática com springdoc-openapi (Swagger UI) e cobertura de testes com JUnit 5 e Mockito.",
    highlights: [
      "Autenticação e autorização via JWT com Spring Security.",
      "Persistência em PostgreSQL com Spring Data JPA.",
      "Documentação interativa da API com Swagger UI (springdoc-openapi).",
      "Testes unitários e de integração com JUnit 5 e Mockito.",
    ],
    links: [
      { label: "Ver repositório", href: "https://github.com/Douglastm/Sales-System" },
    ],
  },
];

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
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null
  );

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
            <span className={styles.sectionKicker}>Projetos</span>
            <h2 className={styles.sectionTitle}>Sales System</h2>
          </div>
          <Link to="/contact" className={styles.inlineLink}>
            Conversar sobre um projeto
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.title}
                type="button"
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.projectMedia}>
                  <img src={project.image} alt="" className={styles.projectPhoto} />
                  <div className={styles.projectTop}>
                    <span className={styles.projectBadge}>
                      <Icon size={16} />
                      <span>{project.category}</span>
                    </span>
                    <span className={styles.projectStatus}>{project.status}</span>
                  </div>
                </div>
                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.stackList}>
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className={styles.stackPill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.comingSoonCard}>
          <div className={styles.comingSoonBadge}>
            <Rocket size={18} />
            <span>Mais projetos em breve</span>
          </div>
          <h3 className={styles.comingSoonTitle}>
            Estou organizando os próximos cases para publicar aqui.
          </h3>
          <p className={styles.comingSoonText}>
            Em breve esta seção terá novos projetos com mais contexto, decisões
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

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </div>
  );
}
