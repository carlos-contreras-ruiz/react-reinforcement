
interface Persona {
    nombreCompleto: string
    edad: number
    direccion: Direccion
}

interface Direccion {
    pais: String
    casaN: number
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaN: 615
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            {JSON.stringify(persona, null, 2)}
        </>
    )
}

