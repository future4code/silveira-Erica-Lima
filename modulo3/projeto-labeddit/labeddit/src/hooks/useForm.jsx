import { useState } from "react";

const useForm = (state) => {
    const [form, setForm] = useState(state)

    const handleInputChange = (e) => {
        const{value, name} = e.target 
        setForm({...form, [name]:value})
    }

    const clear = () => {
        setForm(state)
    }

    return [form, handleInputChange, clear]
}

export default useForm;