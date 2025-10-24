'use client'
import Link from "next/link"
import { Button } from "flowbite-react"
import { MdAddIcCall, MdMail } from "react-icons/md"
import ShowStudents from "../courses/SeeNote/ShowStudents"

import Image from "next/image"
const Page = () => {
    let hasStudent = 1
    return (
        <div className="m-6">
            <div className="border-1 border-gray-400 rounded-lg pt-2 pl-1.5 mb-6">
                <span className="border-b-2 border-sky-500 w-4">Students</span>
                <span className="text-gray-400 mx-4">Group Tags</span>
            </div>
            <div className=" border-gray-400">
                <div className=" border-b-1 border-b-gray-100">
                    <Button size="md" className="mx-2 bg-sky-500 text-white">
                        <MdAddIcCall />
                        <Link href={'/students/addStudent'}>Add New</Link>
                    </Button>
                </div>
            </div>
            
            <div className="my-2">
                {
                    hasStudent?
                    (
                        <ShowStudents />
                    )
                    :
                    (
                       
                       <div className="flex flex-col items-center justify-center my-8">
                <Image width={300} height={300} alt="student picture" src='/next.svg'></Image>
                <h2 className="text-2xl my-6">You dont have any students yet</h2>
                <span className="text-gray-400 my-6">
                    Add your student so you can take their attendance,and more
                </span>
                <Button size="md" className="mx-2 bg-sky-500 text-white">
                    <MdAddIcCall />
                        <Link href={'/students/addStudent'}>Add New</Link>
                </Button>
            </div>
                    )
                }
            </div>
        </div>
    )
}

export default Page