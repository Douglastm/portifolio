import styles from "./TimelineCard.module.css";

type TimelineCardProps = {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  onClick?: () => void;
};

export default function TimelineCard({
  startDate,
  endDate,
  company,
  role,
  onClick,
}: TimelineCardProps) {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      <div className={styles.period}>
        <p className={styles.date}>{startDate}</p>
        <span className={styles.divider} aria-hidden="true"></span>
        <p className={styles.date}>{endDate}</p>
      </div>
      <div className={styles.details}>
        <h4 className={styles.company}>{company}</h4>
        <p className={styles.role}>{role}</p>
      </div>
    </button>
  );
}
