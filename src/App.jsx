import Post from "./components/Post";

import "./Global.css";

const ultimasNoticias = [
  {
    id: 1,
    imagem:
      "https://s2.glbimg.com/Z-oD4APvr3fI6bRfHTpv07DfnbE=/69x0:1136x600/fit-in/515x290/middle/smart/filters:strip_icc():strip_exif():format(webp)/s2.glbimg.com/I136XNHgP-8IWW5jNPtgLA61uNc=/smart/filters:distributed_collage(horizontal,smart,s2.glbimg.com/ZkA6mE9FW07Q3UjDt1S9P4NnFSo=/0x0:650x650/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/N/b/D2SQcyRBeycofbks73IA/aline-enquete.png%7Cs2.glbimg.com/b-lecQSX2A0hmnp6C3nO-xITvCM=/0x0:650x650/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/n/r/42Nf7ZSEy24g0SABAgPg/amanda-enquete.png%7Cs2.glbimg.com/IqsvFOq-7XnGBpR6kR1vNVMfmoU=/0x0:650x650/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/f/f/xcmZvfQYOpf2rPaPCQBw/bruna-griphao-enquete.png)/s3.glbimg.com/v1/AUTH_fd78dc4be9404a2e92b908ade306e9e6/prod/globocom-fback.png",
    descricao:
      "Agora é final! Aline, Amanda ou Bruna: quem deve ganhar o BBB?",
  },
  {
    id: 2,
    imagem:
      "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/18/260x200/1_pexels_laker_6157056-22892661.jpg",
    descricao:
      "Saiba quais são os benefícios do chá de casca de abacaxi",
  },
  {
    id: 3,
    imagem:
      "https://imagens1.ne10.uol.com.br/enem/2023/04/enem-250x140.jpg",
    descricao:
      "Candidatos poderão pedir isenção da taxa do Enem a partir do dia 17",
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

