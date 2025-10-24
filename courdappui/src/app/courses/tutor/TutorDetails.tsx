import { Button,Label,TextInput,HelperText,Textarea } from "flowbite-react"
const TutorDetails = () => {
  return (
<div className="bg-gray-50 rounded-2xl my-6 p-4">
                    <span className="text-gray-400">Step 1/2</span>
                    <h2 className="text-2xl">Tutor Details</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                                            <div >
                        <Label htmlFor="">Title</Label>
                        <TextInput></TextInput>
                        <HelperText>Optional Or for Error</HelperText>
                    </div>
                    <div >
                        <Label htmlFor="">First Name</Label>
                        <TextInput></TextInput>
                        <HelperText>Optional Or for Error</HelperText>
                    </div>
                    <div >
                        <Label htmlFor="">Last Name</Label>
                        <TextInput></TextInput>
                        <HelperText>Optional Or for Error</HelperText>
                    </div>
                    <div >
                        <Label htmlFor="">Email Address</Label>
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
                    <div >
                        <Label htmlFor="">Subject</Label>
                        <Textarea></Textarea>
                        <HelperText>Optional Or for Error</HelperText>
                    </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 my-8">
                        <Button className="bg-sky-400 text-white-100">Next</Button>
                        <Button className="bg-white-600 border-1 border-gray-950 text-gray-600">Cancel</Button>
                    </div>
                </div>
  )
}

export default TutorDetails
