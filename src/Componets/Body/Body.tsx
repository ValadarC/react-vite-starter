import { useState, useEffect, FC } from "react"
import { Card } from "./Card/Card"
import styles from "./Body.module.css"
import { Pokemon, TopLevel } from "../../interfaces/Pokemon.interface"
import { CardLoading } from "./CardLoading/CardLoading"

type PropText = {
  text: string
}

export const Body: FC<PropText> = ({ text }) => {
  console.log(text)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(false)
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState<Pokemon[]>([])
  const itemsArray = Array(6).fill(null)
  useEffect(() => {
    setPokemonsFiltrados(
      pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(text)),
    )
  }, [text])

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
        const pokemonsData: Pokemon[] = []

        for (let i = 1; i <= 151; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          const data: TopLevel = await response.json()
          pokemonsData.push({
            name: data.name,
            id: data.id,
            img: data.sprites.other?.["official-artwork"].front_default,
            type1: data.types[0].type.name,
            type2: data.types[1] !== undefined ? data.types[1].type.name : "",
            weight: data.weight,
            height: data.height,
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            sat: data.stats[3].base_stat,
            sdf: data.stats[4].base_stat,
            spd: data.stats[5].base_stat,
          })
        }

        setPokemons(pokemonsData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPokemons()
  }, [])
  if (pokemonsFiltrados.length) {
    return (
      <div className={styles.body}>
        <div className={styles.cardContainer}>
          {pokemonsFiltrados.map(pokemon => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              img={pokemon.img}
              type1={pokemon.type1}
              type2={pokemon.type2}
              weight={pokemon.weight}
              height={pokemon.height}
              hp={pokemon.hp}
              atk={pokemon.atk}
              def={pokemon.def}
              sat={pokemon.sat}
              sdf={pokemon.sdf}
              spd={pokemon.spd}
            />
          ))}
          {loading && (
            <div className={styles.body}>
              <div className={styles.cardContainer}>
                {itemsArray.map((_, index) => (
                  <CardLoading key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.body}>
        <div className={styles.cardContainer}>
          {pokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              img={pokemon.img}
              type1={pokemon.type1}
              type2={pokemon.type2}
              weight={pokemon.weight}
              height={pokemon.height}
              hp={pokemon.hp}
              atk={pokemon.atk}
              def={pokemon.def}
              sat={pokemon.sat}
              sdf={pokemon.sdf}
              spd={pokemon.spd}
            />
          ))}
          {loading && (
            <div className={styles.body}>
              <div className={styles.cardContainer}>
                {itemsArray.map((_, index) => (
                  <CardLoading key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
