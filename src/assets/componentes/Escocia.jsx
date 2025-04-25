import Styles from '../css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import logo from '../imagens/viagens.jpg'
import Formulario from '../componentes/Formulario'
import bandEscocia from '../imagens/escocia.png'

function Escocia() {
    return(
        <div className={Styles.corpo}>
    <ComponenteProps
        lugar="Escócia"
        texto="Castelos históricos, paisagens verdejantes, lagos misteriosos, cultura celta vibrante e festivais tradicionais são alguns dos atrativos da Escócia."
        logo_texto={logo}
    />
    <Formulario
    bandeira={bandEscocia}
    />
</div>
    )
    
}

export default Escocia