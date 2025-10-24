
import { CgAdd } from "react-icons/cg"
import { Card, Button } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import {motion} from 'framer-motion'
const Accueil = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}
         className="m-4 p-4">
            <h1 className="text-sky-400">Courses</h1>
            <div className="grid grid-cols-3 gap-8 mt-8">
                <Card
                    className="p-4 border-0 shadow-2xl">
                    <Image
                        alt="Bonnie image"
                        height="96"
                        src="/dressIMG/bluerobe.jpg"
                        width="120"
                        className="mb-3 rounded-full shadow-lg mx-auto"
                    />
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        tight definition about what adding is
                    </p>
                    <Button className="bg-sky-400 text-white">
                        <Link href="/courses/addNote">
                            Add a new Note

                        </Link>



                    </Button>
                </Card>
                <Card
                    className="p-4 border-0 shadow-2xl">
                    <Image
                        alt="Bonnie image"
                        height="96"
                        src="/dressIMG/bluerobe.jpg"
                        width="120"
                        className="mb-3 rounded-full shadow-lg mx-auto"
                    />
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        tight definition about what adding is
                    </p>
                    <Button className="bg-sky-400 text-white">
                        <Link href="/courses/SeeNote">
                            See notes

                        </Link>



                    </Button>
                </Card>
                <Card
                    className="p-4 border-0 shadow-2xl">
                    <Image
                        alt="Bonnie image"
                        height="96"
                        src="/dressIMG/bluerobe.jpg"
                        width="120"
                        className="mb-3 rounded-full shadow-lg mx-auto"
                    />
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        tight definition about what adding is
                    </p>
                    <Button className="bg-sky-400 text-white">
                        <Link href="/courses/tutor">
                            Add a tutor

                        </Link>



                    </Button>
                </Card>
            </div>
        </motion.div>
    )
}

export default Accueil