import { ArrowLeftIcon } from "flowbite-react"
import { Label, TextInput,FileInput ,HelperText, Textarea, Button, Checkbox } from "flowbite-react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="flex flex-col mx-2 mt-10">
                        <h2 className="flex items-center text-sky-400">
                <span>
                    <ArrowLeftIcon />
                </span>
                <span className="mx-2">
                    <Link href={'/students'}>Go Back</Link>
                </span>
            </h2>
            <h2 className="text-2xl text-sky-500">Add a student</h2>
                            <div >
                    <Label htmlFor="">Photo</Label>
                    <FileInput></FileInput>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-2">
                <div >
                    <Label htmlFor="">Nom</Label>
                    <TextInput></TextInput>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
                <div >
                    <Label htmlFor="">Prenom</Label>
                    <TextInput></TextInput>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
                <div >
                    <Label htmlFor="">Classe</Label>
                    <TextInput></TextInput>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
                <div >
                    <Label htmlFor="">MATRICULE</Label>
                    <TextInput></TextInput>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
                <div >
                    <Label htmlFor="">Phone Number</Label>
                    <TextInput></TextInput>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
                <div >
                    <Label htmlFor="">Address</Label>
                    <Textarea></Textarea>
                    <HelperText>Optional Or for Error</HelperText>
                </div>
                <h2 className="text-2xl">Matieres</h2>
                <div className="flex items-center my-2">
                    <Checkbox></Checkbox>
                    <Label className="mx-4" htmlFor="">Math</Label>
                </div>
                <div className="flex items-center my-2">
                    <Checkbox></Checkbox>
                    <Label className="mx-4" htmlFor="">PC</Label>
                </div>
                <div className="flex items-center my-2">
                    <Checkbox></Checkbox>
                    <Label className="mx-4" htmlFor="">SVT</Label>
                </div>
                <div className="flex items-center my-2">
                    <Checkbox></Checkbox>
                    <Label className="mx-4" htmlFor="">ECONOMIE</Label>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 my-8">
                <Button className="bg-sky-400 text-white-100">Save</Button>
                <Button className="bg-white-600 border-1 border-gray-950 text-gray-600">Cancel</Button>
            </div>            
        </div>
    )
}

export default Page