import { useState } from "react"


export const AddCatergoy = () => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
}
