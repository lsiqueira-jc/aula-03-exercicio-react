import styles from './Post.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

export function Posts(){
  return (
    <div className={styles.container}>
        <div className={styles.pai}>
            <img className={styles.img} src="https://ccz.sjc.sp.gov.br/imagens/animais/sem-foto.jpg" alt="" />
            <AiOutlineHeart className={styles.coracao}/>
        </div>
         <p className={styles.conteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat malesuada consequat. Phasellus odio odio, venenatis eu neque quis, condimentum bibendum odio. In hac habitasse platea dictumst. Proin lacinia augue non ornare porttitor. Donec ut magna ullamcorper nibh luctus sagittis. Curabitur egestas vitae ante et volutpat. Curabitur elementum, erat quis lobortis sollicitudin, tellus risus porttitor quam, at tristique nisl lacus et orci.</p>
        <div className={styles.line}></div>
      
    </div>
  )
}