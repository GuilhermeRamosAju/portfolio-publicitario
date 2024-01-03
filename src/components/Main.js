import styles from './Main.module.css'
import main from './images/main.png'
const Main = () =>{
  return(
    <div className={styles.mainBg} id='main'>
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <h1 className={styles.titleH1}>Adrya Julia</h1>
          <p className={styles.subTitle}>Copywriting - Desingner - Estratégista digital - Social Media e Videomaker</p>
        </div>
        <img src={main} alt="foto de Adrya"/>
      </div>
    </div>
  )
}
export default Main;