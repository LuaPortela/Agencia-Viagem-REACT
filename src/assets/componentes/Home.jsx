import mala from '../imagens/mala.jpg'
import Styles from '../css/Home.module.css'

function Home(){
    return(
        <section className={Styles.sechome}>
            <div className={Styles.fotomala}>

            </div>

            <div className={Styles.textohome}>
            <h1 className={Styles.h1home}>Encontre aqui a viagem dos seus sonhos!</h1>
            <p className={Styles.phome}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quasi eum odio adipisci pariatur tempore dolore. Amet, fugit beatae. Adipisci quisquam repudiandae perspiciatis reiciendis voluptates temporibus in expedita non odio? lor</p>
            </div>
        </section>
    )
}

export default Home