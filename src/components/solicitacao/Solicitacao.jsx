import styles from "./Solicitacao.module.scss";
import Navbar from "../navbar/Navbar";
import Modal from "../modal/Modal";
import { useState } from "react";
import seta from "../../assets/img/Dashboard/setaRight.png";
import selectImg from "../../assets/img/Dashboard/Vector.png";
import home from "../../assets/img//Dashboard/home.png";
import btnCancelar from "../../assets/img/Dashboard/backspace.png";
import lixeira from "../../assets/img/Dashboard/lixeira.png";
import motivo from "../../assets/img/Dashboard/motivo.png";
import aprovar from "../../assets/img/Dashboard/aprovar.png";
import cancelar from "../../assets/img/Dashboard/N-Rejeitados.png";

function Solicitacao() {
  const [openModal, setModalOpen] = useState(false);
  const [openModalExcluir, setModalOpenExcluir] = useState(false);
  const [openModalCancelar, setModalOpenCancelar] = useState(false);

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
                <textarea type="text" nome="descricao" />
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
                  <div className={styles.selectContainer}>
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
                    <div className={styles.seta}>
                      <img src={selectImg} alt="icone seta" />
                    </div>
                  </div>
                </div>
                <div className={styles.controleCusto}>
                  <label>Controle de Custo</label>
                  <div className={styles.selectContainer}>
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
                    <div className={styles.seta}>
                      <img src={selectImg} alt="icone seta" />
                    </div>
                  </div>
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
                    <option value="3">ARS</option>
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
                <button
                  formAction="#"
                  className={styles.btnCancelar}
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  <img src={btnCancelar} alt="icone voltar" />
                </button>
                {openModal && (
                  <Modal
                    isOpen={openModal}
                    setModalOpen={() => setModalOpen(!openModal)}
                    buttonText="Continuar Editando"
                    buttonText2="Sim, limpar"
                  >
                    <p>Deseja realmente limpar os campos preenchidos acima?</p>
                  </Modal>
                )}
                {openModalExcluir && (
                  <Modal
                    isOpen={openModalExcluir}
                    setModalOpen={() => setModalOpenExcluir(!openModalExcluir)}
                    buttonText="Continuar Editando"
                    buttonText2="Sim, excluir"
                  >
                    <p>Deseja realmente excluir os dados dessa linha?</p>
                  </Modal>
                )}
                {openModalCancelar && (
                  <Modal
                    isOpen={openModalCancelar}
                    setModalOpen={() =>
                      setModalOpenCancelar(!openModalCancelar)
                    }
                    buttonText="Continuar Editando"
                    buttonText2="Sim, Cancelar"
                  >
                    <p>Tem certeza que deseja cancelar a solicitação?</p>
                  </Modal>
                )}
              </div>
            </div>
          </form>
          <table className={styles.tabela}>
            <tr className={styles.cabecalho}>
              <th className={styles.col1}>00</th>
              <th>Colaborador</th>
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
              <th className={styles.lastCol}>Despesa</th>
            </tr>
            <tr>
              <td
                className={styles.col1}
                onClick={() => {
                  setModalOpenExcluir(true);
                }}
              >
                <img src={lixeira} alt="icone lixeira" />
              </td>
              <td>Vitor Carvalho</td>
              <td>WSS001</td>
              <td>329456</td>
              <td>08/01/2025</td>
              <td>
                <img src={motivo} alt="icone descrição" />
              </td>
              <td>Desp. de </td>
              <td>1100110002</td>
              <td>0003</td>
              <td>002</td>
              <td>001</td>
              <td>BRL</td>
              <td>434Km</td>
              <td>0.65</td>
              <td>242.10</td>
              <td className={styles.lastCol}>40.05</td>
            </tr>
            <tr>
              <td
                className={styles.col1}
                onClick={() => {
                  setModalOpenExcluir(true);
                }}
              >
                <img src={lixeira} alt="icone lixeira" />
              </td>
              <td>Vanessa Port</td>
              <td>WSS002</td>
              <td>987789</td>
              <td>01/01/2025</td>
              <td>
                <img src={motivo} alt="icone descrição" />
              </td>
              <td>Desp. de </td>
              <td>1100110002</td>
              <td>0003</td>
              <td>002</td>
              <td>001</td>
              <td>BRL</td>
              <td>434Km</td>
              <td>0.65</td>
              <td>242.10</td>
              <td className={styles.lastCol}>40.05</td>
            </tr>
            <tr>
              <td
                className={styles.col1}
                onClick={() => {
                  setModalOpenExcluir(true);
                }}
              >
                <img src={lixeira} alt="icone lixeira" />
              </td>
              <td>Washington Kl</td>
              <td>WSS003</td>
              <td>546791</td>
              <td>03/01/2025</td>
              <td>
                <img src={motivo} alt="icone descrição" />
              </td>
              <td>Desp. de </td>
              <td>1100110002</td>
              <td>0003</td>
              <td>002</td>
              <td>001</td>
              <td>BRL</td>
              <td>434Km</td>
              <td>0.65</td>
              <td>242.10</td>
              <td className={styles.lastCol}>40.05</td>
            </tr>
          </table>
          <section className={styles.enviarSolicitacao}>
            <div>
              <label>Total Faturado</label>
              <input type="text" nome="totalFaturado" placeholder="0.00" />
            </div>
            <div>
              <label>Total Despesa</label>
              <input type="text" nome="totalFaturado" placeholder="0.00" />
            </div>
            <button className={styles.btnEnviar}>
              <img src={aprovar} alt="icone aprovar" />
              Enviar para Análise
            </button>
            <button
              onClick={() => {
                setModalOpenCancelar(true);
              }}
              className={styles.btnCancelarSolicitacao}
            >
              <img src={cancelar} alt="icone cancelar" />
              Cancelar Solicitação
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}
export default Solicitacao;
