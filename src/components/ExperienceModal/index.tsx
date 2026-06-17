import { useEffect } from "react";
import { X } from "lucide-react";

import styles from "./ExperienceModal.module.css";

export type ExperienceDetails = {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  summary: string;
  highlights: string[];
};

type ExperienceModalProps = {
  experience: ExperienceDetails;
  onClose: () => void;
};

export default function ExperienceModal({
  experience,
  onClose,
}: ExperienceModalProps) {
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
        aria-labelledby="experience-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar detalhes da experiência"
        >
          <X size={20} />
        </button>

        <div className={styles.header}>
          <span className={styles.period}>
            {experience.startDate} - {experience.endDate}
          </span>
          <h2 id="experience-modal-title" className={styles.company}>
            {experience.company}
          </h2>
          <p className={styles.role}>{experience.role}</p>
        </div>

        <p className={styles.summary}>{experience.summary}</p>

        <div className={styles.content}>
          <h3 className={styles.subtitle}>Principais atividades</h3>
          <ul className={styles.list}>
            {experience.highlights.map((highlight) => (
              <li key={highlight} className={styles.listItem}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
