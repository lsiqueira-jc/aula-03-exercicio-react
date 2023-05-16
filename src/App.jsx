import Post from "./components/Post";

import "./Global.css";

const ultimasNoticias = [
  {
    id: 1,
    imagem:
        "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/05/16/597x330/1_water_tap_gc263c76be_1920-22994562.jpg",
    descricao:
      "Bairros do Grande Recife vão enfrentar suspensão no abastecimento de água, anuncia Compesa",
  },
  {
    id: 2,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/05/13/806x444/1_ds12052022_1__28_-21014105.jpg",
    descricao:
      "MELHORES UNIVERSIDADES DO BRASIL: UFPE é a melhor do Nordeste, mas fica longe do top 3 nacional em ranking",
  },
  {
    id: 3,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/05/15/806x444/1_img_2495-22993563.jpg",
    descricao:
      "No dia do Gari, sindicato destaca pautas prioritárias da categoria e presta homenagem ao gari assassinado em Boa Viagem",
  },
];

export default function App() {
  return (
    <div>
      <h1>Notícias Recentes</h1>

      {ultimasNoticias.map((post) => {
        return <Post imagem={post.imagem} descricao={post.descricao} />;
      })}
    </div>
  );
}
