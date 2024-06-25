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
      {/* header */}
      <div className="headerCard">
        <p>{name}</p>
        <p className={`headerCardNumber`}>{id.toString().padStart(3, '0')}</p>
      </div>

      {/* conntent */}
      <div className="contentCard">
        <div className="cardImg">
          <img src={img} />
        </div>

        {/* Tipos */}
        <div className="tiposCard">
          <div className={`tiposCardTipo ${type1}`}>
            <img
              className={'tiposCardImg'}
              src={`src/Componets/Body/Card/SVG/${type1}.svg`}
            />
            <div>{type1}</div>
          </div>
          {type2 && (
            <div className={`tiposCardTipo ${type2}`}>
              <img
                className={'tiposCardImg'}
                src={`src/Componets/Body/Card/SVG/${type2}.svg`}
              />
              <div>{type2}</div>
            </div>
          )}
        </div>

        {/* Mensures */}
        <div className="mensuresCard">
          <div className="icones">
            <img
              className="imgIconos"
              src="src/Componets/Body/Card/SVG/Weight.svg"
            />
            <div>{weight / 10} kg</div>
          </div>
          <div className="sep"></div>
          <div className="icones">
            <img
              className="imgIconos"
              src="src\Componets\Body\Card\SVG\Ruler.svg"
            />
            <div>{height / 10} m</div>
          </div>
        </div>

        {/* Stats */}
        <div className="statsCard">
          <div className="stat">
            <div className="statName"> HP &nbsp;</div>
            <div> {hp.toString().padStart(3, '0')}</div>
            <progress max="250" value={hp}></progress>
          </div>

          <div className="stat">
            <div className="statName">ATK</div>
            <div> {atk.toString().padStart(3, '0')}</div>
            <progress max="134" value={atk}></progress>
          </div>

          <div className="stat">
            <div className="statName">DEF</div>
            <div>{def.toString().padStart(3, '0')}</div>
            <progress max="180" value={def}></progress>
          </div>

          <div className="stat">
            <div className="statName">SAT</div>
            <div>{sat.toString().padStart(3, '0')}</div>
            <progress max="154" value={sat}></progress>
          </div>

          <div className="stat">
            <div className="statName">SDF</div>
            <div>{sdf.toString().padStart(3, '0')}</div>
            <progress max="125" value={sdf}></progress>
          </div>
          <div className="stat">
            <div className="statName">SPD</div>
            <div>{spd.toString().padStart(3, '0')}</div>
            <progress max="150" value={spd}></progress>
          </div>
        </div>
      </div>
    </div>
  )
}
