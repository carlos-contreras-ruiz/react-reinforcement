import { useEffect, useReducer } from "react"

interface AuthState{
    validando: boolean
    token: string | null
    username: string
    nombre: string
}

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//las interfaces son mucho mas faciles de expandir que los tipos
type LoginPayload= {username: string, nombre: string}
type AuthAction = 
    |{type: 'logout'}
    |{type: 'login', payload:LoginPayload }

const authReducer = (state: AuthState, action: AuthAction):AuthState  => {

    switch(action.type){
        case 'logout':
            return{
                validando: false,
                token: null,
                nombre: '',
                username:''
            } 
        case 'login':
            const { nombre } = action.payload
            return {
                ...state,
                validando: false,
                token: 'ABC123',
                nombre,
                username: action.payload.username
            }
        default:
            return state
    }
}

export const Login = () => {

    //const [state, dispatch] = useReducer(authReducer, initialState)

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
       setTimeout(() => {
           dispatch({type: 'logout'})
       }, 1500);
    }, [])

    const login = ()=>{
        dispatch({
            type: 'login',
            payload:{
                username: 'ori',
                nombre: 'Carlos'
            }
        })
    }

    const logout = ()=>{
        dispatch({
            type: 'logout'
        })
    }

    if(validando){
        return(
            <div className="alert alert-info">Validando</div>
        )
    }

    return (
        <>
        <h3>Login</h3>

        {
            (token && nombre !== '')
            ?
            <div className="alert alert-success">Autenticado</div>
            :
            <div className="alert alert-danger">No autenticado</div>
        }

        {
            (token)
            ?
            <button className="btn btn-danger"
                onClick={logout}
            >Log out</button>
            :
            <button className="btn btn-primary"
                onClick={login}
            >Login</button>
        }

        

        

        

        
            
        </>
    )
}
