

export const TiposBasicos = () => {

    const nombre = 'Fernando'
    const edad: number = 34
    const isActive: boolean = true
    const poderes: string[] = ['1', '2', '3']
    //const algo = []

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}, {edad}, {isActive ? 'Activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
