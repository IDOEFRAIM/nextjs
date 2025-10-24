'use client'
import Link from "next/link"
import { ArrowLeftIcon } from "flowbite-react"
import Informations from "./information"
import Notes from "./note"
const Page = () => {
    return (
        <div className="flex flex-col">
            <h2 className="flex items-center text-sky-400">
                <span>
                    <Link href={'/courses'}>
                        <ArrowLeftIcon />
                    </Link>

                </span>
                <span className="mx-2">Go back</span>
            </h2>
            <Informations />
            <Notes />

        </div>
    )
}

export default Page