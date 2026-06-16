import type { LucideIcon } from "lucide-react";
import styles from "./TagsInfo.module.css";

interface TagInfoProps {
  icon: LucideIcon;
  label: string;
}

export default function TagInfo({
  icon: Icon,
  label,
}: TagInfoProps) {
  return (
    <div className={styles.container}>
      <Icon className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
