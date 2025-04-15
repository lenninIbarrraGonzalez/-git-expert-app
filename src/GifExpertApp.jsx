import { useState } from "react"
import { AddCatergoy } from "./components/AddCatergoy";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    console.log(categories)

    const onAddCategory = () => {
        setCategories([...categories, "valorant"]);
    }

    return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>
        
        <AddCatergoy />

        {/* listado de gifs */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {/* {categories.map((category)=>{
                    return <li key={category}>{category}</li>
                })} */}

                {categories.map(category =><li key={category}>{category}</li>)}
            </ol>

            {/* gif itmes  */}
    </>
    )
}
