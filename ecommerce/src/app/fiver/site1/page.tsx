import { Button, Card } from "flowbite-react"
import { ArrowRightIcon } from "flowbite-react"
import Image from "next/image"
const Page = () => {
    return (
        <div className="home flex flex-col">
            <div className=" relative  h-dvh w-dvw
         bg-[url('/dressIMG/whitedress.jpg')] bg-cover">
                <div className="flex-col flex absolute  bottom-[60px] left-[30px] ">
                    <h1 className="text-3xl text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati
                        iure harum, ipsam vero quaerat consequuntur in eius laborum a.
                    </h1>
                    <div className="flex my-4">
                        <Button className="w-[100px] h-[50px] mx-4">button 1</Button>
                        <Button className="w-[100px] h-[50px]">button 1</Button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 w-full  bg-orange-100">
                <h2 className="text-white text-6xl">JORDAN</h2>
                <h2 className="text-white text-6xl">JORDAN</h2>
                <h2 className="text-white text-6xl">JORDAN</h2>
                <h2 className="text-white text-6xl">JORDAN</h2>
                <h2 className="text-white text-6xl">JORDAN</h2>

            </div>
            <div className="popular_product my-10">
                <div className="grid grid-cols-2">
                    <h2 className="text-3xl text-sky-400">Popular product</h2>
                    <div className="flex flex-col">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam in
                            laborum at ut facere accusantium eos quos a nam vero?</span>
                        <Button className="w-[100px] h-[40px] flex">
                            See more
                            <ArrowRightIcon></ArrowRightIcon>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mx-4">
                {
                    [1, 2, 3, 4, 5].map((x, i) => {
                        return (
                            <Card className="flex flex-col">
                                <span className="badge bg-red-400 w-20 h-8">Badge </span>
                                <div className="flex justify-center items-center">
                                    <Image width={200} height={150} alt="picture" src='/dressIMG/whitedress.jpg'></Image>

                                </div>
                                <span className="text-gray-400">Simple message</span>
                                <h2 className="text-3xl text-gray-400">Product name</h2>
                                <span className="text-gray-300">Other info</span>
                                <div className="flex justify-between">
                                    <Button>Link</Button>
                                    <ArrowRightIcon></ArrowRightIcon>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
            <div className="testimonial w-full h-[300px] flex flex-col justify-evenly items-center bg-orange-200 my-8">
                <h1 className="text-3xl text-white">Testimonial</h1>
                <h2 className="text white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae nostrum voluptatem iusto. Sint modi architecto natus nisi
                    consequatur soluta impedit ullam ab, molestias amet, consequuntur ducimus placeat temporibus at!
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
            </div>
            <div className="footer grid grid-cols-3 bg-orange-300 my-6">
                <div className="customCase flex flex-col">
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                </div>
                <div className="contact flex flex-col">
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                </div>
                <div className="Otherpart flex flex-col">
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                    <span className="text-white">PART</span>
                </div>
            </div>
            <div className="team flex flex-col">
                <div className="member1 flex justify-evenly items-center px-8">
                    <h2 className="mx-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo impedit expedita? Neque doloribus sit molestias voluptatum earum tempora ut id, reiciendis incidunt repellendus quia, architecto corporis
                        corrupti saepe omnis! Eius exercitationem tempore dolorem asperiores ipsam ipsa atque eligendi cupiditate?
                    </h2>
                    <Image width={300} height={300} alt="picture" src='/dressIMG/whitedress.jpg'></Image>
                </div>
                <div className="member1 flex justify-evenly items-center px-8">

                    <Image width={300} height={300} alt="picture" src='/dressIMG/whitedress.jpg'></Image>
                    <h2 className="mx-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo impedit expedita? Neque doloribus sit molestias voluptatum earum tempora ut id, reiciendis incidunt repellendus quia, architecto corporis
                        corrupti saepe omnis! Eius exercitationem tempore dolorem asperiores ipsam ipsa atque eligendi cupiditate?
                    </h2>
                </div>
                <div className="member1 flex justify-evenly items-center px-8">
                    <h2 className="mx-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo impedit expedita? Neque doloribus sit molestias voluptatum earum tempora ut id, reiciendis incidunt repellendus quia, architecto corporis
                        corrupti saepe omnis! Eius exercitationem tempore dolorem asperiores ipsam ipsa atque eligendi cupiditate?
                    </h2>
                    <Image width={300} height={300} alt="picture" src='/dressIMG/whitedress.jpg'></Image>
                </div>
            </div>
        </div>
    )
}


export default Page