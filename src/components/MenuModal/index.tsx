import styles from "./MenuModal.module.css";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type MenuItem = {
  path: string;
  label: string;
  icon: LucideIcon;
};

type Props = {
  items: MenuItem[];
  onClose: () => void;
};

export default function MenuModal({
  items,
  onClose,
}: Props) {
  return (
    <div className={styles.overlay}>
      <nav className={styles.grid}>
        {items.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            onClick={onClose}
            className={styles.item}
          >
            <Icon size={24} />
            <span className={styles.label}>
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}