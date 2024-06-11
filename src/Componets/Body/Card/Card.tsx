import React from 'react'
import styles from './Card.module.css'
import { Pokemon } from '../../../interfaces/Pokemon.interface'

export const Card: React.FC<Pokemon> = ({
  name,
  id,
  img,
  type1,
  type2,
  weight,
  height,
  hp,
  atk,
  def,
  sat,
  sdf,
  spd,
}) => {
  return (
    <div className={styles.card} key={id}>
      <h3>{name}</h3>
      <h3>{id}</h3>
      <img src={img} />
      <p>
        Type: {type1} / {type2}
      </p>
      <p>
        Weight: {weight} / Height: {height}
      </p>
      <ul>
        <li>HP: {hp}</li>
        <li>Attack: {atk}</li>
        <li>Defense: {def}</li>
        <li>Special Attack: {sat}</li>
        <li>Special Defense: {sdf}</li>
        <li>Speed: {spd}</li>
      </ul>
    </div>
  )
}
