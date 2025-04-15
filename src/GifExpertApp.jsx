import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (onNewCategory) => {
        const index = categories.findIndex((category) => category === onNewCategory);
        if(index > -1) return;
        setCategories([...categories, onNewCategory]);
    }

    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={onAddCategory}/>
        {categories.map(category => <GifGrid key = {category} category={category}/> )}
    </>
    )
}
