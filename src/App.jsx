import Post from "./components/Post";

import "./Global.css";

const ultimasNoticias = [
  {
    id: 1,
    imagem:
        "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/03/18/806x444/1_52755114732_652c94d9f7_k__1_-22564845.jpg",
    descricao:
      "o Náutico tem o seu desafio mais importante na temporada até o momento. Logo mais, à noite, o Timbu enfrenta o Cruzeiro pelo jogo de volta da 3ª fase da Copa do Brasil 2023.",
  },
  {
    id: 2,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/19/806x444/1_whatsapp_image_2023_04_14_at_11_29_53-22895127.jpeg",
    descricao:
      "Feira Made Pernambuco espera movimentar R$ 1 milhão em negócios do artesanato no RioMar Recife",
  },
  {
    id: 3,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/11/18/806x444/1_18112021_az2a2010-19457084.jpg",
    descricao:
      "Prefeitura comemora boom de novos edifícios no Centro do Recife, mas restauração de antigos prédios não engrena",
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