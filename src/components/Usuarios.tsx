import { useUsuarios } from '../hooks/useUsuarios';
import { User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const {usuarios, nextPage, prevPage} = useUsuarios();
    
    const renderItem = (usuario: User) => {
        return (
            <tr key={usuario.id}>
                <td><img 
                    src={usuario.avatar} 
                    alt={usuario.first_name} style={{
                    width:35,
                    borderRadius:100
                }} /></td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    

    return (
        <>
            <h3>Usuarios</h3>

            <table className="table table-cordered">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( usuario => renderItem(usuario))
                    }
                   
                </tbody>
            </table>

            <button className="btn btn-primary" 
                onClick={prevPage}
            >Previous</button>
            <br />
            <button className="btn btn-primary" 
                onClick={nextPage}
            >Next</button>
        </>
    )
}
