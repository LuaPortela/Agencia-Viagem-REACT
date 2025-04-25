import Styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import logo from '../imagens/viagens.jpg'
import Formulario from '../componentes/Formulario'
import bandAruba from '../imagens/aruba.png'

function Aruba() {
    return(
        <div className={Styles.corpo}>
            <ComponenteProps
            lugar="Aruba"
            texto="Praias paradisíacas, mar cristalino, hotéis requintados, cassinos e programação para toda a família são alguns dos atrativos de Aruba."
            logo_texto={logo}
            />
            <Formulario
            bandeira={bandAruba}
            />
             </div>
    )
    
}

export default Aruba