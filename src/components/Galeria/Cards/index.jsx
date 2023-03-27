import React from "react";
import favorito from "./img/favorito.png";
import open from "./img/open.png";

export default function Cards({itens,styles}) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="Icone de curtir" />
                <img src={open} alt="Icone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
