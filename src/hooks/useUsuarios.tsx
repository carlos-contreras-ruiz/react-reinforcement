import { useEffect, useRef, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<User[]>([])
    
     const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async()=>{
        const resp = await reqResApi.get<ReqResList>('/users',{
            params:{
                page: paginaRef.current
            }
        })

        if(resp.data.data.length > 0){
            
            setUsuarios(resp.data.data)
        }else{
            paginaRef.current--
            alert('No hay mas registros')
        }

        
    }

    const nextPage = ()=>{
        paginaRef.current++
        cargarUsuarios()
    }

    const prevPage = ()=>{
        if(paginaRef.current > 1){
            paginaRef.current--
            cargarUsuarios()
        }
        
    }

    return {
        usuarios,
        nextPage,
        prevPage
    }
}



