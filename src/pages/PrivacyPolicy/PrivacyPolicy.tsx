import { Link } from "react-router-dom";
import { ArrowUpRight, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

import styles from "./PrivacyPolicy.module.css";

const sections = [
  {
    title: "1. Coleta de informações",
    text:
      "Este portfólio pode coletar informações fornecidas diretamente por você ao entrar em contato, como nome, email, empresa, assunto e conteúdo da mensagem. Também podem ser registrados dados técnicos básicos de navegação, como tipo de dispositivo, navegador e páginas acessadas, quando aplicável.",
  },
  {
    title: "2. Uso das informações",
    text:
      "Os dados são utilizados exclusivamente para responder contatos, avaliar oportunidades profissionais, manter comunicação relacionada a projetos e melhorar a experiência geral do site. Nenhuma informação é utilizada para finalidades incompatíveis com essas atividades.",
  },
  {
    title: "3. Compartilhamento de dados",
    text:
      "As informações não são vendidas nem compartilhadas de forma indiscriminada. O compartilhamento pode ocorrer apenas quando necessário para viabilizar ferramentas técnicas do site, serviços de hospedagem ou cumprimento de obrigação legal.",
  },
  {
    title: "4. Armazenamento e segurança",
    text:
      "São adotadas medidas razoáveis para proteger as informações contra acesso não autorizado, alteração indevida, divulgação ou perda. Ainda assim, nenhum ambiente digital pode ser considerado totalmente imune a riscos.",
  },
  {
    title: "5. Seus direitos",
    text:
      "Você pode solicitar esclarecimentos, atualização ou remoção de dados enviados por meio dos canais de contato disponíveis neste portfólio, sempre que isso for aplicável ao contexto da interação realizada.",
  },
  {
    title: "6. Atualizações desta política",
    text:
      "Esta política pode ser ajustada periodicamente para refletir mudanças no site, nos fluxos de contato ou em ferramentas utilizadas. A versão publicada nesta página deve ser considerada a referência mais atual dentro do portfólio.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Privacidade</span>
            <h1 className={styles.title}>Política de Privacidade</h1>
            <p className={styles.description}>
              Esta página explica, de forma objetiva, como informações podem ser
              tratadas dentro deste portfólio e nos canais de contato
              relacionados a ele.
            </p>
          </div>

          <div className={styles.heroSide}>
            <div className={styles.heroCard}>
              <LockKeyhole size={18} />
              <div>
                <strong>Uso responsável</strong>
                <p>Dados tratados apenas dentro do contexto de contato e apresentação profissional.</p>
              </div>
            </div>
            <div className={styles.heroCard}>
              <ShieldCheck size={18} />
              <div>
                <strong>Clareza e transparência</strong>
                <p>Texto direto, sem excesso de juridiquês para um site pessoal.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <span className={styles.sideKicker}>Resumo</span>
              <ul className={styles.sideList}>
                <li>Coleta restrita ao necessário para contato.</li>
                <li>Uso voltado a comunicação profissional.</li>
                <li>Sem comercialização de dados.</li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <span className={styles.sideKicker}>Contato</span>
              <a href="mailto:douglastmagalhaes.dev@gmail.com" className={styles.sideLink}>
                <Mail size={18} />
                <span>douglastmagalhaes.dev@gmail.com</span>
              </a>
            </div>
          </aside>

          <article className={styles.document}>
            <div className={styles.documentIntro}>
              <p>
                Este conteúdo tem caráter informativo e busca estabelecer um
                compromisso claro com privacidade, transparência e uso
                responsável de informações em um ambiente de portfólio pessoal.
              </p>
            </div>

            <div className={styles.documentSections}>
              {sections.map(({ title, text }) => (
                <section key={title} className={styles.documentBlock}>
                  <h2 className={styles.blockTitle}>{title}</h2>
                  <p className={styles.blockText}>{text}</p>
                </section>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.footerCallout}>
          <div>
            <span className={styles.sideKicker}>Próximo passo</span>
            <h2 className={styles.calloutTitle}>Se precisar de esclarecimentos, fale comigo diretamente.</h2>
          </div>
          <Link to="/contact" className={styles.calloutLink}>
            Ir para contato
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
