import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import bgPrincipal from "../../assets/img/Tela Login/imagem tela de login.png";
import logo from "../../assets/img/Tela Login/logo-ws.png";

function Login() {
  return (
    <main className={styles.container}>
      <img src={bgPrincipal} alt="navio de containers" />
      <section className={styles.login}>
        <img src={logo} alt="logo tipo wilson sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <a href="#">Esqueci minha senha</a>

          <div>
            <Link to="/reembolso">
              <button className={styles.btnLogin}>Entrar</button>
            </Link>
            <button className={styles.btnCriar}>Criar conta</button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Login;
