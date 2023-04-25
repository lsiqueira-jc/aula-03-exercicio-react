export default function Post (Props){
    return (
        <div>
            <img src={Props.imagem}/>
            <p>{Props.descricao}</p>  

        </div>
    ) 
 }