import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Copyright, FileText, Mail } from "lucide-react";

import styles from "./Rights.module.css";

const sections = [
  {
    title: "1. Titularidade do conteúdo",
    text:
      "Salvo indicação em contrário, textos, estrutura visual, organização das páginas, elementos autorais e materiais produzidos especificamente para este portfólio pertencem ao autor do site.",
  },
  {
    title: "2. Uso permitido",
    text:
      "É permitido navegar, consultar informações e utilizar este portfólio como referência para avaliação profissional, contato, propostas e análise pública do trabalho apresentado.",
  },
  {
    title: "3. Restrições de uso",
    text:
      "Não é permitido reproduzir integralmente conteúdos autorais, identidade visual, textos ou materiais do site para uso comercial, redistribuição ou republicação sem autorização prévia, exceto quando houver sinalização explícita em sentido diverso.",
  },
  {
    title: "4. Projetos e referências de terceiros",
    text:
      "Alguns projetos, marcas, ferramentas, nomes de empresas ou tecnologias mencionadas podem pertencer a seus respectivos titulares. Sua citação neste portfólio tem finalidade descritiva, curricular ou demonstrativa.",
  },
  {
    title: "5. Solicitações e correções",
    text:
      "Caso algum conteúdo precise de ajuste, remoção ou atribuição adicional, a solicitação pode ser encaminhada pelos canais de contato disponíveis neste portfólio.",
  },
];

export default function Rights() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Direitos</span>
          <h1 className={styles.title}>Direitos Autorais e Uso de Conteúdo</h1>
          <p className={styles.description}>
            Esta página define, de forma direta, como os materiais deste
            portfólio podem ser consultados e quais limites se aplicam ao uso
            do conteúdo aqui apresentado.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.document}>
            <div className={styles.documentHeader}>
              <div className={styles.headerBadge}>
                <Copyright size={18} />
                <span>Conteúdo protegido</span>
              </div>
              <p className={styles.documentLead}>
                O objetivo desta página é resguardar materiais autorais do
                portfólio sem criar barreiras desnecessárias para leitura,
                avaliação profissional e contato.
              </p>
            </div>

            <div className={styles.sectionList}>
              {sections.map(({ title, text }) => (
                <section key={title} className={styles.sectionCard}>
                  <h2 className={styles.cardTitle}>{title}</h2>
                  <p className={styles.cardText}>{text}</p>
                </section>
              ))}
            </div>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <div className={styles.sideItem}>
                <BadgeCheck size={18} />
                <div>
                  <strong>Consulta liberada</strong>
                  <p>Navegação, leitura e avaliação profissional do portfólio são permitidas.</p>
                </div>
              </div>
              <div className={styles.sideItem}>
                <FileText size={18} />
                <div>
                  <strong>Reprodução limitada</strong>
                  <p>Uso comercial, cópia extensa ou redistribuição exigem autorização.</p>
                </div>
              </div>
            </div>

            <div className={`${styles.sideCard} ${styles.contactCard}`}>
              <span className={styles.sideKicker}>Solicitações</span>
              <a href="mailto:douglastmagalhaes.dev@gmail.com" className={styles.contactLink}>
                <Mail size={18} />
                <span>douglastmagalhaes.dev@gmail.com</span>
              </a>
              <Link to="/contact" className={styles.inlineLink}>
                Abrir página de contato
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
