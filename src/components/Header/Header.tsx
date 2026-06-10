import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

import {
  Home,
  User,
  FolderGit2,
  Mail,
  Menu,
  X,
} from "lucide-react";

import Logo from "../../assets/images/Logo.png";

// import MenuModal from "../MenuModal/MenuModal";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Início", icon: Home },
    { path: "/about", label: "Sobre", icon: User },
    { path: "/projects", label: "Projetos", icon: FolderGit2 },
    { path: "/contact", label: "Contato", icon: Mail },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <img
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
            />

            <span className={styles.logoName}>
              Douglas
            </span>
          </div>

          {/* Menu Desktop */}
          <nav className={styles.actions}>
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;

              return (
                <Link
                  key={path}
                  to={path}
                  className={`${styles.nav_link} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  <Icon size={22} />

                  <span
                    className={`${styles.label} ${
                      isActive ? styles.show : ""
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Menu Mobile */}
          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
          >
            {isMenuOpen ? (
              <X className={styles.icon_menu} />
            ) : (
              <Menu className={styles.icon_menu} />
            )}
          </button>
        </div>
      </header>

      {/* Modal Mobile */}
      {/*
      {isMenuOpen && (
        <MenuModal
          items={navItems}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
      */}
    </>
  );
}