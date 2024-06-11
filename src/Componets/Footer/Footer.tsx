import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.textoFoter}>
        ©2024 Pokémon. ©1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc. TM,
        ®Nintendo.
      </p>
    </div>
  )
}
export default Footer

