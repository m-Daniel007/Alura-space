import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Galeria from "components/Galeria";
import Menu from "components/Menu";
import Populares from "components/Populares";
import Rodape from "components/Rodape";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInical() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className={styles.principal}>
          <Menu />
          <Banner />
        </div>
      <div className={styles.galeria}>
        <Galeria/>
        <Populares/>
      </div>
      </main>
      <Rodape />
    </>
  );
}
