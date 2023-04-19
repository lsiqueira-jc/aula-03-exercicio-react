import { Exemplo } from './components/Exemplo'
import { Post } from './components/Post'


import './Global.css'


const ultimas = [
  {
    id:1,
    imagem:"https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/04/17/806x444/1_1681731095446481-22886903.jpg",
    descricao:"ENQUETE BBB 23 ATUALIZADA AGORA: PARCIAL UOL E VOTALHADA apontam REVIRAVOLTA sobre QUEM VAI SAIR DO BBB HOJE"
  },
  {
    id:2, 
    imagem:"https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/01/20/806x444/1_7u3a0982-20470970.jpg",
    descricao:"Copa do Nordeste tem transmissão da TV Jornal em Pernambuco"
  }
]

function App() {
  return (
    <div>
      <h1>Lista de Posts</h1>
     
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
