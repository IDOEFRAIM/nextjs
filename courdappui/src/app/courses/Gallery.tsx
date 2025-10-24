import { Carousel } from "flowbite-react"

const Gallery= ()=>{
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-red-800">
            <Carousel>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </Carousel>
        </div>
    )
}

export default Gallery