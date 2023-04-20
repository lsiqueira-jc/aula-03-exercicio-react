import Post from "./components/Post";

import "./Global.css";

const ultimasNoticias = [
  {
    id: 1,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/png/2022/05/19/440x240/1_quina-21052705.png",
    descricao:
      "Resultado da Quina 6130: veja os números sorteados hoje, quinta-feira, 20/04",
  },
  {
    id: 2,
    imagem:
      "https://imagens.ne10.uol.com.br/img/imagens/2021/04/08/fb0e6408a6_design-sem-nome.jpg",
    descricao:
      "LOTOFÁCIL 2793 RESULTADO : veja os NÚMEROS SORTEADOS da LOTOFÁCIL nesta QUINTA (20/04)",
  },
  {
    id: 3,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/19/440x240/1_design_sem_nome-22893704.jpg",
    descricao:
      "QUEM VAI SER O ELIMINADO DO BBB23 HOJE? Veja PERCENTUAL ATUALIZADO",
  },
];

export default function App() {
  return (
    <div>
      <h1>Últimas Notícias</h1>

      {ultimasNoticias.map((post) => {
        return <Post imagem={post.imagem} descricao={post.descricao} />;
      })}
    </div>
  );
}
