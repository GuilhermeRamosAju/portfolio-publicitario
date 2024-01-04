import images from './images/images.js';
import styles from './Brands.module.css';

const Brands = () =>{
  return(   
    <section className={styles.brandsContainer}>
      <span>Algumas marcas que já trabalhei</span>
      <div className={styles.brandsImg}>
        <img src={images.marca1} alt="aracajucard" />
        <img src={images.marca2} alt="setransp" />
        <img src={images.marca3} alt="clubecar" />
        <img src={images.marca4} alt="locatelli" />
        <img src={images.marca5} alt="pastíssima" />
      </div>
    </section>
  )
}
export default Brands;