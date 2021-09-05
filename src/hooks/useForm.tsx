import { useState } from "react"

export const useForm = <T extends Object>(initialForm: T) => {

    const [form, setForm] = useState(initialForm)

    const onchange = (value: string, campo: keyof T)=>{
        setForm({
            ...form,
            [campo]: value
        })
    }

    return{
        form,
        ...form,
        onchange
    }
}
