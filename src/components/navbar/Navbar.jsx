import styles from "./Navbar.module.scss";
import menu from "../../assets/img/Header/imagem-fechar-header.png";
import user from "../../assets/img/Header/image.png";
import home from "../../assets/img/Header/botão - Home.png";
import historico from "../../assets/img/Header/Botão - Histórico.png";
import pesquisa from "../../assets/img/Header/Botão - Pesquisa.png";
import reembolso from "../../assets/img/Header/Botão - Reembolso.png";
import sair from "../../assets/img/Header/Botão - Sair.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button className={styles.btnMenu}>
        <img src={menu} alt="icone de menu" />
      </button>

      <div className={styles.navegacao}>
        <img className={styles.user} src={user} alt="icone de usuário" />
        <button className="btnHome">
          <img src={home} alt="icone de home" />
        </button>
        <button className="btnReembolso">
          <img src={reembolso} alt="icone de reembolso" />
        </button>
        <button className="btnPesquisa">
          <img src={pesquisa} alt="icone de pesquisa" />
        </button>
        <button className="btnHistorico">
          <img src={historico} alt="icone de histórico" />
        </button>
      </div>

      <button className={styles.btnSair}>
        <img src={sair} alt="icone de sair" />
      </button>
    </nav>
  );
}
export default Navbar;
