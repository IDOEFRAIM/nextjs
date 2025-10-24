'use client'
import { TextInput ,Button} from "flowbite-react"    
import { ArrowRightIcon } from "flowbite-react"
import Notes from "./addNote/note"
import Info from "./addNote/information"
import StudentTable from "./StudentTable"
import Gallery from "./Gallery"
import ShowStudents from "./SeeNote/ShowStudents"
import Accueil from "./Accueil"
import NewTutor from "./tutor/newTutor"


const Page= ()=>{
    return (
        <div className="flex flex-col">
            <Accueil />
        </div>
    )
}

export default Page