import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import { Body } from './Componets/Body/Body'
import { Buscador } from './Componets/Body/Buscador/Buscador'
import { useState } from 'react'

export const App = () => {
  const [text, SetText] = useState('')
  const onSubmit = (text: string) => {
    SetText(text)
    console.log(text)
  }

  return (
    <>
      <Header />
      <Buscador onChange={onSubmit} />
      <Body text={text} />
      <Footer />
    </>
  )
}
