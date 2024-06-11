import styles from './Buscador.module.css'
import {useState, FC, ChangeEvent} from 'react'

interface Prop {
  text?: string
  onChange: (text:string)=>void
}

export const Buscador: FC<Prop> = (props) => {
  const [text, setText] = useState('')

  const onSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    props.onChange(event.target.value)
  }

  const validar = () => {
    if (text) {
      console.log(text)
    }
  }

  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={text}
        onChange={onSubmit}
        placeholder="Pokemon..."
      />
      <button onClick={validar} className={styles.SearchButton}>
        Pesquisar
      </button>
    </div>
  )
}


