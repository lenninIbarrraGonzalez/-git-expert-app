import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        // console.log("verificando que se ejecuto el submit desde la pruebas");
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}