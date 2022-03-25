//1 Importar contex
import { createContext, useState } from "react";

//2 mandar a llamar contex importado
const CotizadorContex = createContext()

//3 provider
const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };

    const [error, setError] = useState('');

    return (
        <CotizadorContex.Provider
            value={{
                datos,
                handleChangeDatos
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