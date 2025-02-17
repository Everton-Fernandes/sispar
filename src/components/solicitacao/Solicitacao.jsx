import styles from "./Solicitacao.module.scss";
import Navbar from "../navbar/Navbar";
import seta from "../../assets/img/Dashboard/setaRight.png";
import home from "../../assets/img//Dashboard/home.png";
import btnCancelar from "../../assets/img/Dashboard/backspace.png";
import lixeira from "../../assets/img/Dashboard/lixeira.png";
import motivo from "../../assets/img/Dashboard/motivo.png";

function Solicitacao() {
  return (
    <div className={styles.divContainer}>
      <Navbar />
      <main className={styles.container}>
        <header className={styles.header}>
          <img className={styles.iconHome} src={home} alt="icone home" />
          <img className={styles.iconSeta} src={seta} alt="icone seta" />
          <h2>Reembolsos</h2>
          <img className={styles.iconSeta} src={seta} alt="icone seta" />
          <h2>Solicitação de Reembolso</h2>
        </header>
        <section className={styles.solicitacao}>
          <form className={styles.formContainer}>
            <div className={styles.empresaContainer}>
              <div className={styles.linhaUm}>
                <div className={styles.nome}>
                  <label>Nome Completo</label>
                  <input type="text" nome="nome" />
                </div>
                <div className={styles.empresa}>
                  <label>Empresa</label>
                  <input type="text" nome="empresa" />
                </div>
                <div className={styles.empresa}>
                  <label>Nº Prest. Contas</label>
                  <input type="text" nome="prestacao" />
                </div>
              </div>
              <div className={styles.linhaDois}>
                <label>Descrição / Motivo do Reembolso</label>
                <input type="text" nome="descricao" />
              </div>
            </div>

            <div className={styles.linha}></div>

            <div className={styles.valores}>
              <div className={styles.linhaTres}>
                <div className={styles.data}>
                  <label>Data</label>
                  <input type="date" nome="data" />
                </div>
                <div className={styles.tipoDespesa}>
                  <label>Tipo de Despesa</label>
                  <select name="tipoDespesa">
                    <option value="0">Selecionar</option>
                    <option value="1">Alimentação</option>
                    <option value="2">Combustível</option>
                    <option value="3">Condução</option>
                    <option value="4">Estacionamento</option>
                    <option value="5">Viagem admin.</option>
                    <option value="6">Viagem operacional</option>
                    <option value="7">Eventos de representação</option>
                  </select>
                </div>
                <div className={styles.controleCusto}>
                  <label>Controle de Custo</label>
                  <select name="controleCusto">
                    <option value="0">Selecionar</option>
                    <option value="1">
                      1100109002 - FIN CONTROLES INTERNOS MTZ
                    </option>
                    <option value="2">
                      1100110002 - FIN VICE-PRESIDENCIA FINANÇAS MTZ
                    </option>
                    <option value="3">
                      1100110102 - FIN CONTABILIDADE MTZ
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.linhaQuatro}>
                <div className={styles.ordemInterna}>
                  <label>Ord. Int.</label>
                  <input type="text" nome="ordemInterna" />
                </div>
                <div className={styles.pep}>
                  <label>PEP</label>
                  <input type="text" nome="pep" />
                </div>
                <div className={styles.divisao}>
                  <label>Div.</label>
                  <input type="text" nome="divisao" />
                </div>
                <div className={styles.distancia}>
                  <label>Dist./ Km</label>
                  <input type="text" nome="distancia" />
                </div>
                <div className={styles.moeda}>
                  <label>Moeda</label>
                  <select name="moeda">
                    <option value="0">Sel.</option>
                    <option value="1">BRL</option>
                    <option value="2">USD</option>
                  </select>
                </div>
                <div className={styles.valor}>
                  <label>Valor / Km</label>
                  <input type="text" nome="valor" />
                </div>
                <div className={styles.valorTaxa}>
                  <label>Val. Taxa</label>
                  <input type="text" nome="valorTaxa" />
                </div>
                <div className={styles.valorFaturado}>
                  <label>Val. Faturado</label>
                  <input type="text" nome="valorFaturado" />
                </div>
                <button className={styles.btnSalvar}>+ Salvar</button>
                <button className={styles.btnCancelar}>
                  <img src={btnCancelar} alt="icone voltar" />
                </button>
              </div>
            </div>
          </form>
          <table className={styles.tabela}>
            <tr className={styles.cabecalho}>
              <th></th>
              <th>Colaborador(a)</th>
              <th>Empresa</th>
              <th>Nº Prest.</th>
              <th>Data</th>
              <th>Motivo</th>
              <th>Tipo Reemb.</th>
              <th>Cth. Custo</th>
              <th>Ord. Int.</th>
              <th>Div.</th>
              <th>PEP</th>
              <th>Moeda</th>
              <th>Dist. Km</th>
              <th>Val. Km</th>
              <th>Val. Faturado</th>
              <th>Despesa</th>
            </tr>
            <tr>
              <td>
                <img src={lixeira} alt="icone lixeira" />
              </td>
              <td>Colaborador(a)</td>
              <td>Empresa</td>
              <td>Nº Prest.</td>
              <td>Data</td>
              <td>
                <img src={motivo} alt="icone descrição" />
              </td>
              <td>Tipo Reemb.</td>
              <td>Ctrl. Custo</td>
              <td>Ord. Int.</td>
              <td>Div.</td>
              <td>PEP</td>
              <td>Moeda</td>
              <td>Dist. Km</td>
              <td>Val. Km</td>
              <td>Val. Faturado</td>
              <td>Despesa</td>
            </tr>
          </table>
          <section className={styles.enviarSolicitacao}>
            <button className={styles.btnEnviar}>Enviar para Análise</button>
            <button className={styles.btnCancelarSolicitacao}>
              Cancelar Solicitação
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}
export default Solicitacao;
