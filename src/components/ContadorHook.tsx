import { useCounter } from '../hooks/useCounter';

export const ContadorHook = () => {

    const { valor, acumular } = useCounter(5)


    return (
        <>
            <h3>Contador Hook</h3>
            <p>{valor}</p>
            <button className="btn btn-primary"
                onClick={() => acumular(1)}
            >+1</button>
            <br />
            <button className="btn btn-primary"
                onClick={() => acumular(-1)}
            >-1</button>
        </>
    )
}
