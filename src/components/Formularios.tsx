import { useForm } from "../hooks/useForm"

export const Formularios = () => {

    const{ form, onchange, email, pass} = useForm({
        email: 'alias@email.com',
        pass: '123'
    })

    return (
        <>
           <h3>Formularios</h3> 
           <input type="text" 
           className="form-control mt-2 mb-2"
           placeholder="Email"
           value={email}
           onChange={(e)=>onchange(e.target.value,'email')}/>

            <input type="text" 
           className="form-control mt-2 mb-2"
           placeholder="Paasword"
           value={pass}
           onChange={({target})=>onchange(target.value,'pass')}/>

           <code>
               <pre>
                   {JSON.stringify(form)}
               </pre>
           </code>
        </>
    )
}
