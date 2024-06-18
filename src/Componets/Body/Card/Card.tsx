import { FC } from 'react'
import './card.css'
import { Pokemon } from '../../../interfaces/Pokemon.interface'

export const Card: FC<Pokemon> = ({
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
  console.log(type1)
  return (
    <div className={`card ${type1}`} key={id}>
      <div className={'headerCard'}>
        <p>{name}</p>
        <p>{id}</p>
      </div>

      <div className={'contentCard'}>
        <div className={'cardImg'}>
          <img src={img} />
        </div>

        <div className={'tiposCard'}>
          <div className={`${type1}`}>{type1}</div>
          <div className={`${type2}`}>{type2}</div>
        </div>

        <div className={'mensuresCard'}>
          <div className={'icones'}>
            <img
              className={'imgIconos'}
              src="src/Componets/Body/Card/SVG/Weight.svg"
            />
            <div>{weight/10} kg</div>
          </div>
          <div className={'sep'}></div>
          <div className={'icones'}>
            <img
              className={'imgIconos'}
              src="src\Componets\Body\Card\SVG\Ruler.svg"
            />
            <div>{height / 10} m</div>
          </div>
        </div>

        <div className={'statsCard'}>
          <li className={'stat'}>HP_ {hp}</li>
          <li className={'stat'}>ATK {atk}</li>
          <li className={'stat'}>DEF {def}</li>
          <li className={'stat'}>SAT {sat}</li>
          <li className={'stat'}>SDF {sdf}</li>
          <li className={'stat'}>SPD {spd}</li>
        </div>
      </div>
    </div>
  )
}
