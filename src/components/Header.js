import React, { useState } from 'react';
import styles from './Header.module.css'
import ajBrand from './images/ajBrand.png'
const Header = () =>{
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  return(
    <header className={`${styles.menu}`}>
      <nav>
        <div className={styles.menuToggle}>
          <div onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <img className={styles.logoImg} src={ajBrand} alt="logo" />
        </div>

        <ul className={`${styles.menuContainer} ${menuOpen ? styles.showMenu : ''}`}>
            <li><a href='#main' onClick={toggleMenu}>INÍCIO</a></li>
            <li><a href="#about" onClick={toggleMenu}>SOBRE MIM</a></li>
            <img className={styles.logoImg} src={ajBrand} alt="logo" />
            <li><a href="#work" onClick={toggleMenu}>TRABALHOS</a></li>
            <li><a href="#footer" onClick={toggleMenu}>CONTATO</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;