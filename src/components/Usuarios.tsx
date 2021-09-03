import { useEffect, useRef, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqResList, User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<User[]>([])
    
     const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

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

    const cargarUsuarios = async()=>{
        const resp = await reqResApi.get<ReqResList>('/users',{
            params:{
                page: paginaRef.current
            }
        })

        if(resp.data.data.length > 0){
            paginaRef.current++
            setUsuarios(resp.data.data)
        }else{
            alert('No hay mas registros')
        }

        
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
                onClick={cargarUsuarios}
            >Next</button>
        </>
    )
}
