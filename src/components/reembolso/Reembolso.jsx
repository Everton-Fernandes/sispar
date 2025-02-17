import styles from "./Reembolso.module.scss";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import iconReembolso from "../../assets/img/Dashboard/Solicitar - Reembolso.png";
import analise from "../../assets/img/Dashboard/Análises.png";
import historico from "../../assets/img/Dashboard/Solicitar - Histórico.png";
import solicitados from "../../assets/img/Dashboard/N-Solicitados.png";
import emAnalise from "../../assets/img/Dashboard/N-Análises.png";
import aprovados from "../../assets/img/Dashboard/N-Aprovados.png";
import rejeitados from "../../assets/img/Dashboard/N-Rejeitados.png";
import seta from "../../assets/img/Dashboard/setaRight.png";
import home from "../../assets/img//Dashboard/home.png";
import atualizando from "../../assets/img/Dashboard/Sistema-atualizado.png";

import Card from "../card/Card";

function Reembolso() {
  return (
    <div className={styles.divContainer}>
      <Navbar />
      <main className={styles.container}>
        <header className={styles.header}>
          <img className={styles.iconHome} src={home} alt="icone home" />
          <img className={styles.iconSeta} src={seta} alt="icone seta" />
          <h2>Reembolsos</h2>
        </header>
        <section className={styles.reembolso}>
          <div className={styles.title}>
            <h1>Sistema de Reembolsos</h1>
            <p>
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico
            </p>
          </div>
          <article className={styles.cards}>
            <Link to="/solicitacao">
              <Card
                imagem={iconReembolso}
                descricaoAlt="icone de solicitar reembolso"
                titulo="Solicitar Reembolso"
              />
            </Link>
            <Card
              imagem={analise}
              descricaoAlt="icone analise"
              titulo="Verificar análises"
            />
            <Card
              imagem={historico}
              descricaoAlt="icone historico"
              titulo="Histórico"
            />
          </article>

          <article className={styles.analitics}>
            <div>
              <div className={styles.solicitados}>
                <img src={solicitados} alt="icone solicitados" />
              </div>
              <span>182</span>
              <p>Solicitados</p>
            </div>
            <div>
              <div className={styles.emAnalise}>
                <img src={emAnalise} alt="icone em Analise" />
              </div>
              <span>74</span>
              <p>Em análise</p>
            </div>
            <div>
              <div className={styles.aprovados}>
                <img src={aprovados} alt="icone aprovados" />
              </div>
              <span>195</span>
              <p>Aprovados</p>
            </div>
            <div>
              <div className={styles.rejeitados}>
                <img src={rejeitados} alt="icone rejeitados" />
              </div>
              <span>41</span>
              <p>Rejeitados</p>
            </div>
          </article>
          <div className={styles.atualizacao}>
            <img src={atualizando} alt="icone atualizando" />
            <h4>Sistema atualizado.</h4>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Reembolso;
