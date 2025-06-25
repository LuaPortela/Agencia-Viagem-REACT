import styles from '../css/ComponenteProps.module.css'

function ComponenteProps({ lugar, texto, logo_texto }) {
  return (
    <div className={styles.corpo_texto}>
      <h2>Venha Explorar esse lugar incrível {lugar}!!</h2>
      <p>{texto}</p>
      <img src={logo_texto} alt="logo" className={styles.icoViagem} />
    </div>
  )
}

export default ComponenteProps