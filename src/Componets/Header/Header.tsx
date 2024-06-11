import styles from './Header.module.css'
import PokeballLogo from './Pokeball'
import PokedexLogo from './PokedexLogo'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.pokelogo}>
          <PokeballLogo />
          <PokedexLogo />
      </div>
    </div>
  )
}
export default Header
