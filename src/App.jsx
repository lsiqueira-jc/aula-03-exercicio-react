import { Exemplo } from './components/Exemplo'
import { Post } from './components/Post'

import './Global.css'




const  ultimas = [
  {
    id:1,
    imagem:"https://imagens.ne10.uol.com.br/veiculos/_midias/png/2023/04/17/260x200/1_domitila__amanda_e_larissa_estao_no_16___paredao_do_bbb_23-22886751.png",
    descricao:"O BBB 23 desencadeou o seu décimo sexto paredão na temporada e a votação esquentou bastante o clima entre os participantes"
  },
  {
    id:2,
    imagem:"https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/01/20/806x444/1_7u3a0982-20470970.jpg",
    descricao:"A grande final da Copa do Nordeste chegou! Ceará e Sport começam nesta quarta-feira (19) a decidir o título da Copa dos Clássicos. A promessa é de uma disputa acirrada e fortes emoções. E para não perder nada dessa decisão, a TV Jornal entra em campo para uma grande cobertura com exclusividade na TV aberta em Pernambuco."
  },
  {
    id:3,
    imagem:"https://imagens.ne10.uol.com.br/veiculos/_midias/png/2023/04/17/260x200/1_domitila__amanda_e_larissa_estao_no_16___paredao_do_bbb_23-22886751.png",
    descricao:"O BBB 23 desencadeou o seu décimo sexto paredão na temporada e a votação esquentou bastante o clima entre os participantes"
  },
]

function App() {
  return (
    <div>
      <h1>Lista de Posts</h1>

      <Post 
        imagem="https://imagens.ne10.uol.com.br/veiculos/_midias/png/2023/04/17/260x200/1_domitila__amanda_e_larissa_estao_no_16___paredao_do_bbb_23-22886751.png"
        descricao="Teste"
      />

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
