import { useState } from "react"

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
