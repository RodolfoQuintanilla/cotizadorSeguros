//1 Importar contex
import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularmarca, calcularPlan, formatearDinero } from "../helpers"

//2 mandar a llamar contex importado
const CotizadorContex = createContext()

//3 provider
const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);


    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };

    const cotizarSeguro = () => {
        //una base
        let resultado = 2000;

        //Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        console.log(diferencia);

        //hay que estar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100
        console.log(resultado);


        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        resultado *= calcularmarca(datos.marca)


        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)


        //Formatear Dinero
        resultado = formatearDinero(resultado)
        setResultado(resultado)

    }


    return (
        <CotizadorContex.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContex.Provider>
    )
}
//4 exportar CotizadorProvider

export {
    CotizadorProvider
}
//5 exportar datos
export default CotizadorContex

//6 se importa en el APP.jsx

//7 importar useContext==> import { useContext } from 'react';

//8 se crea funcion o algo en el archivo provider  o Se crea un hook

//9  const { nombre de lo q se pase } = useContext(CotizadirContext)==> se extrae funcion