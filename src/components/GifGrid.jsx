import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
        
    return (
        <>
            <h3>{category}</h3>

            {isLoading && <span>Cargando...</span>}
            
            <div className="card-grid">
            {images.map((images) => (
                <GifItem 
                    key={images.id} 
                    {...images}
                />
            ))}
            </div>
            
            
        </>
    )
}
