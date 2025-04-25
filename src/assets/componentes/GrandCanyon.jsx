import Styles from '../css/GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps'
import logo from '../imagens/viagens.jpg'
import Formulario from '../componentes/Formulario'
import bandGrand from '../imagens/usa.png'

function GrandCanyon() {
    return(
        <div className={Styles.corpo}>
    <ComponenteProps
        lugar="Grand Canyon"
        texto="Cânions imponentes, vistas deslumbrantes, trilhas desafiadoras, pôr do sol inesquecível e natureza intocada são alguns dos atrativos do Grand Canyon."
        logo_texto={logo}
    />
    <Formulario
    bandeira={bandGrand}
    />
</div>
    )
    
}

export default GrandCanyon