'use client'
import { Button, TextInput,Label,HelperText, Textarea, Select} from "flowbite-react"
import { ArrowRightIcon } from "flowbite-react"
import { HiMail } from "react-icons/hi"
import { BiEnvelope } from "react-icons/bi"
const Informations = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="grid gap-8 md:grid-cols-2 p-4">
                <div >
                    <Label htmlFor="" >Corrector Name</Label>
                    <TextInput placeholder="Set your description"
                   
                    required color="success"></TextInput>
                    <HelperText className="text-red-700">An error occurs ,please check</HelperText>
                </div>
                <div >
                    <Label htmlFor="" >Description</Label>
                    <TextInput
                    rightIcon={BiEnvelope}></TextInput>
                </div>
                <div >
                    <Label htmlFor="" >Description du devoir</Label>
                    <Textarea color="failure" placeholder="leave your description"></Textarea>
                </div>
                <div >
                    <Label htmlFor="" >Classe</Label>
                    <Select required>
                        <option >Tle</option>
                        <option >3eme</option>
                    </Select>
                </div>
                <div >
                    <Label
                    
                     htmlFor="" >Appreciation general</Label>
                    <TextInput
                    addon='@'></TextInput>
                </div>
            </div>
            <Button>
                Suivant <ArrowRightIcon />
            </Button>
        </div>
    )
}

export default Informations