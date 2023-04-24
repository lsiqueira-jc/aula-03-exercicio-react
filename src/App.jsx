import Post from "./components/Post";

import "./Global.css";

const ultimasNoticias = [
  {
    id: 1,
    imagem: 
        "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/20/95x95/1_juba_sport_1-22898478.jpg",
    descricao:
      "Time da Libertadores tem interesse em Juba, diz jornal internacional",
  },
  {
    id: 2,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/24/95x95/1_whatsapp_image_2023_04_24_at_10_48_23-22906775.jpeg",
    descricao:
      "Fiscalização em escolas encontra merenda vencida, cadeiras quebradas e falta de acessibilidade",
  },
  {
    id: 3,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/06/174x174/1_formula_1___4_-22859751.jpg",
    descricao:
      "Tem FÓRMULA 1 neste final de semana? Veja agenda completa do GP do Azerbaijão, Classificação e Calendário da Fórmula 1",
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
