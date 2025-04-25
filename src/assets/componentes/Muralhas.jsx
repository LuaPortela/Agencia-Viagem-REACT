import Styles from '../css/Muralhas.module.css'
import ComponenteProps from './ComponenteProps'
import logo from '../imagens/viagens.jpg'
import bandChina from '../imagens/china.png'
import Formulario from '../componentes/Formulario'


function Muralhas() {
    return(
        <div className={Styles.corpo}>
    <ComponenteProps
        lugar="Muralha da China"
        texto="Construção milenar, paisagens montanhosas, história rica, torres de vigilância e extensão impressionante são alguns dos atrativos da Muralha da China."
        logo_texto={logo}
    />
    <Formulario
    bandeira={bandChina}
    />
</div>
    )
    
}

export default Muralhas