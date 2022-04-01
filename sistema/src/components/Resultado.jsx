import useCotizador from '../hooks/useCotizador'

const resultado = () => {
    const { resultado } = useCotizador()
    if (resultado === 0) return null

    return (
        <div>
            {resultado}
        </div>
    );
};

export default resultado;