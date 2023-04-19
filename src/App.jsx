import { Post } from './components/Post'

import './Global.css'
import styles from './components/Post.module.css'

const  ultimas = [
  {
    id:1,
    imagem:"https://pbs.twimg.com/media/FuDIWsAWcAA8z8R?format=jpg&name=large",
    descricao:"Depois de realizarem um show histórico no Coachella 2023, as meninas do BLACKPINK desembarcaram direto no “Carpool Karaoke”, no The Late Late Show com James Corden. Na noite desta terça-feira (18), as meninas se divertiram, deram detalhes sobre o treinamento rigoroso que passaram antes de estrear e revelaram inspirações no grupo britânico Spice Girls."
  },
  {
    id:2,
    imagem:"https://pbs.twimg.com/media/FuBs9sGaEAAxws5?format=jpg&name=large",
    descricao:"Jisoo, Jennie, Lisa e Rosé começaram a diversão ao som de “Pink Venom” e colocaram até James Corden para cantar. Depois disso, elas descreveram o treinamento rigoroso que precisaram passar antes de fazerem sucesso no mundo todo, incluindo aulas de Popping e Krumping, onde comentaram que fazer “cara de raiva” era necessário para realizar os movimento de dança."
  },
  {
    id:3,
    imagem:"https://pbs.twimg.com/media/FuDhnQ2XgAAXfpE?format=jpg&name=small",
    descricao:"Vale destacar que o BLACKPINK fez história no Coachella 2023 no último domingo (16). O grupo se tornou o primeiro ato de K-Pop a comandar o festival. No entanto, as novidades não acabaram por aí! Pouco tempo depois de desembarcarem na América do Norte com shows da turnê mundial “BORN PINK WORLD TOUR”, o grupo anunciou nada menos que uma continuação em estádios."
  },
]

function App() {
  return (
    <div className={styles.ultimas}>
      <h1>BlackPink</h1>

      {
        ultimas.map(post =>{
          return (
           <Post
              imagem={post.imagem}
              descricao={post.descricao} 
           />
          )
        })
      }
 
    </div>
  )
}

export default App