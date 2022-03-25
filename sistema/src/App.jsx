//6 se importa context
//7 importamos useContext
import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from "./components/AppSeguro"

function App() {

  

  return (
    //7 se cubre la etiqueta principal
    <CotizadorProvider value={{}}>
      <AppSeguro />
    </CotizadorProvider>


  )
}

export default App
