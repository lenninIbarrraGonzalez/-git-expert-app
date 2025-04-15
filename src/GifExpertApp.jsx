import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (onNewCategory) => {
        const index = categories.findIndex((categorie) => categorie === onNewCategory);
        if(index > -1) return;
        setCategories([...categories, onNewCategory]);
    }

    return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>
        
        <AddCategory onNewCategory={onAddCategory}/>

        {/* listado de gifs */}
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
