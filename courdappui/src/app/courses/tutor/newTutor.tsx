"use client"

import Link from "next/link"
import { ArrowLeftIcon } from "flowbite-react"
import {Button,  } from "flowbite-react"
import Priviledge from "./Priviledge"
import TutorDetails from "./TutorDetails"
import { useState } from "react"
import { Progress,Tabs } from "flowbite-react"

const NewTutor = () => {
    const [step,setStep] = useState(1)
    const steps = ['Details','Priviledge']
    return (
        <div className="mx-8">
            <h2 className="flex items-center text-sky-400">
                <Link href='/courses/'>
                    <span>
                        <ArrowLeftIcon />
                    </span></Link>
                <span className="mx-8">Back to tutor and stuff</span>

            </h2>
            <div className="my-8">
                <h1 className="text-3xl">Create a new tutor -  Step: {step}/{steps.length}</h1>
                <Progress progress={(step/steps.length)*100}></Progress>
                <div className="mx-auto flex flex-col">
                    <div className="grid grid-cols-2">
                            <Button onClick={()=>setStep(1)}
                               className={`text-gray-500 text-2xl ${step==1?'bg-sky-400':'bg-sky-white'} `}>Details</Button>
                            <Button onClick={()=>setStep(2)}
                                className={`text-gray-500 text-2xl ${step==2?'bg-sky-400':'bg-sky-white'} `}>Priviledge</Button>
                    </div>
                    <div>
                            {step == 1 ? <TutorDetails /> : <Priviledge />}
                    </div>
                        
                </div>
                
               
            </div>
        </div>
    )
}

export default NewTutor