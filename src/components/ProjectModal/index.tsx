import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import styles from "./ProjectModal.module.css";

export type ProjectDetails = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  year: string;
  role: string;
  backgroundClassName: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  icon: LucideIcon;
  links: {
    label: string;
    href: string;
  }[];
};

type ProjectModalProps = {
  project: ProjectDetails;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
        >
          <X size={20} />
        </button>

        <div className={`${styles.visual} ${project.backgroundClassName}`}>
          <div className={styles.visualBadge}>{project.category}</div>
          <div className={styles.visualMeta}>
            <span>{project.status}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className={styles.header}>
          <span className={styles.role}>{project.role}</span>
          <h2 id="project-modal-title" className={styles.title}>
            {project.title}
          </h2>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.stackList}>
          {project.stack.map((item) => (
            <span key={item} className={styles.stackPill}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3 className={styles.subtitle}>Resumo</h3>
            <p className={styles.text}>{project.summary}</p>
          </div>

          <div className={styles.contentBlock}>
            <h3 className={styles.subtitle}>Desafio</h3>
            <p className={styles.text}>{project.challenge}</p>
          </div>

          <div className={styles.contentBlock}>
            <h3 className={styles.subtitle}>Solução</h3>
            <p className={styles.text}>{project.solution}</p>
          </div>

          <div className={styles.contentBlock}>
            <h3 className={styles.subtitle}>Destaques</h3>
            <ul className={styles.list}>
              {project.highlights.map((highlight) => (
                <li key={highlight} className={styles.listItem}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.actions}>
          {project.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={styles.actionLink}
            >
              <span>{label}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
