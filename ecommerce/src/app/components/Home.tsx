import { Button } from "flowbite-react"
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const Home = () => {
    return (
        <div className="">
            <div className="flex flex-col py-10">
                <div className="mx-8 py-8 flex justify-center items-center
            bg-orange-100  h-[150px] rounded-lg ">
                    <div className="w-[225px] flex flex-col">
                        <h2 className="text-sky-400 text-2xl text-center">C est le moment de vendre</h2>
                        <Button color="alternative">
                            <HiUserCircle className="me-2 h-4 w-4" />
                            Deposer une annonce
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <h1 className="text-sky-400 text-2xl lg:hidden py-5">C est la rentree</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                     gap-6 w-full  my-8">
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover
                        hidden lg:block">
                            <span className="text-sky-600 text-2xl">Cest la rentree</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/bluerobe.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/bluerobe.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <h1 className="text-sky-400 text-2xl lg:hidden py-5">C est la rentree</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                     gap-6 w-full  my-8">
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover
                        hidden lg:block">
                            <span className="text-sky-600 text-2xl">Cest la rentree</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/bluerobe.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/bluerobe.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                        <div className="h-[240px] bg-[url('/dressIMG/whitedress.jpg')] bg-cover lg:block">
                            <span className="text-white text-2xl">a simple text</span>
                        </div>
                    </div>
                </div>
            </div>
            <span>bob</span>
                <div className="flex flex-col py-2">
                    <h1 className="text-sky-400 text-2xl  py-5">title</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full  my-8 ">
                            <div className="flex flex-col">
                                <Image width={300} height={192} src="/dressIMG/bluerobe.jpg" alt="robe" className="rounded-lg"/>
                                <h1 className="text-2xl font-bold">Appartement de Charme</h1>
                                <h1 className="text-2xl font-bold">Centre ville de Besancon</h1>
                                <h1 className="text-2xl font-bold my-5">354000 €</h1>
                                <span className="text-gray-400">Besancon 25000 boucle</span>
                                <span className="text-gray-400">aujourd hui a 19h03</span>
                            </div>
                            <div className="flex flex-col">
                                <Image width={300} height={192} src="/dressIMG/bluerobe.jpg" alt="robe" className="rounded-lg"/>
                                <h1 className="text-2xl font-bold">Appartement de Charme</h1>
                                <h1 className="text-2xl font-bold">Centre ville de Besancon</h1>
                                <h1 className="text-2xl font-bold my-5">354000 €</h1>
                                <span className="text-gray-400">Besancon 25000 boucle</span>
                                <span className="text-gray-400">aujourd hui a 19h03</span>
                            </div>
                            <div className="flex flex-col">
                                <Image width={300} height={192} src="/dressIMG/bluerobe.jpg" alt="robe" className="rounded-lg"/>
                                <h1 className="text-2xl font-bold">Appartement de Charme</h1>
                                <h1 className="text-2xl font-bold">Centre ville de Besancon</h1>
                                <h1 className="text-2xl font-bold my-5">354000 €</h1>
                                <span className="text-gray-400">Besancon 25000 boucle</span>
                                <span className="text-gray-400">aujourd hui a 19h03</span>
                            </div>  
                            <div className="flex flex-col">
                                <Image width={300} height={192} src="/dressIMG/bluerobe.jpg" alt="robe" className="rounded-lg"/>
                                <h1 className="text-2xl font-bold">Appartement de Charme</h1>
                                <h1 className="text-2xl font-bold">Centre ville de Besancon</h1>
                                <h1 className="text-2xl font-bold my-5">354000 €</h1>
                                <span className="text-gray-400">Besancon 25000 boucle</span>
                                <span className="text-gray-400">aujourd hui a 19h03</span>
                            </div>                              
                            <div className="flex flex-col">
                                <Image width={300} height={192} src="/dressIMG/bluerobe.jpg" alt="robe" className="rounded-lg"/>
                                <h1 className="text-2xl font-bold">Appartement de Charme</h1>
                                <h1 className="text-2xl font-bold">Centre ville de Besancon</h1>
                                <h1 className="text-2xl font-bold my-5">354000 €</h1>
                                <span className="text-gray-400">Besancon 25000 boucle</span>
                                <span className="text-gray-400">aujourd hui a 19h03</span>
                            </div>                              

                    </div>
                </div>
        </div>
    )
}
export default Home


{/*
    
import { Carousel } from "flowbite-react";

const Home = () => {
    return (
        <>
            <div className="w-full bg-red-700">
                <div className="md:grid h-screen  grid-cols-2 my-4">
                    <div className="h-full bg-sky-400">1</div>
                    <div className="h-full bg-sky-400">2</div>
                </div>
                <div className="md:grid h-screen grid-cols-3">
                    <div className="h-full bg-sky-400">1</div>
                    <div className="h-full bg-sky-400">2</div>
                    <div className="h-full hidden lg:block bg-sky-400">3</div>

                </div>

            </div>
                  
        </>
    )
}

export default Home
    */}