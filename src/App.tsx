import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import { Body } from './Componets/Body/Body'
import { Buscador } from './Componets/Body/Buscador/Buscador'

export const App = () => {
  const handleChange = (text:string)=> {
    console.log(text)
  }
  return (
    <>
      <Header />
      <Buscador onChange={handleChange} />
      <Body />
      <Footer />
    </>
  )
}