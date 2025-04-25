import Styles from '../css/Footer.module.css'
import insta from '../imagens/insta.png'
import face from '../imagens/face.png'
import tiktok from '../imagens/tiktok.webp'
import whtas from '../imagens/wpp.png'

function Footer(){

    return(
        <footer className={Styles.footer}>
            <h3 className={Styles.h3footer}>Siga-nos em nossas redes sociais</h3>
            <div className={Styles.icones}>
              <a href="#">  <img src={insta} alt="Instagram" className={Styles.iconesImg} /> </a>
              <a href="#">  <img src={face} alt="Facebook"  className={Styles.iconesImg}/> </a>
              <a href="#">   <img src={tiktok} alt="TikTok"  className={Styles.iconesImg}/> </a>
              <a href="#">   <img src={whtas} alt="WhatsApp"  className={Styles.iconesImg}/> </a>
            </div>
            <h3 className={Styles.h3footercontato}>Telefone de Contato - (11) 9626-37489</h3>
        </footer>

    )
}

export default Footer