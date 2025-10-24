import { TextInput } from "flowbite-react"

const Notes = ()=>{
    return (
        <div className="flex flex-col items-center m-8">
            <div className="grid gap-4 md:grid-cols-2 m-2 p-1 border-l-2 border-l-gray-400">
                <div className="flex items-center justify-center">
                    <TextInput placeholder="Put in the matricule" />
                </div>
                <div className="grid gap-4">
                    <div className="">
                        <TextInput placeholder="Set the note"/>
                    </div>
                    <div className="">
                        <TextInput placeholder="leave your appreciation" />
                    </div>
                </div>
            </div>    
            <div className="grid gap-4 md:grid-cols-2 m-2 p-1 border-l-2 border-l-sky-400">
                <div className="flex items-center justify-center">
                    <TextInput placeholder="Put in the matricule" />
                </div>
                <div className="grid gap-4">
                    <div className="">
                        <TextInput placeholder="Set the note"/>
                    </div>
                    <div className="">
                        <TextInput placeholder="leave your appreciation" />
                    </div>
                </div>
            </div>   
            <div className="grid gap-4 md:grid-cols-2 m-2 p-1 border-l-2 border-l-violet-500">
                <div className="flex items-center justify-center">
                    <TextInput placeholder="Put in the matricule" />
                </div>
                <div className="grid gap-4">
                    <div className="">
                        <TextInput placeholder="Set the note"/>
                    </div>
                    <div className="">
                        <TextInput placeholder="leave your appreciation" />
                    </div>
                </div>
            </div> 
            <div className="grid gap-4 md:grid-cols-2 m-2 p-1 border-l-2 border-l-yellow-400">
                <div className="flex items-center justify-center">
                    <TextInput placeholder="Put in the matricule" />
                </div>
                <div className="grid gap-4">
                    <div className="">
                        <TextInput placeholder="Set the note"/>
                    </div>
                    <div className="">
                        <TextInput placeholder="leave your appreciation" />
                    </div>
                </div>
            </div> 
            <div className="grid gap-4 md:grid-cols-2 m-2 p-1 border-l-2 border-l-green-400">
                <div className="flex items-center justify-center">
                    <TextInput placeholder="Put in the matricule" />
                </div>
                <div className="grid gap-4">
                    <div className="">
                        <TextInput placeholder="Set the note"/>
                    </div>
                    <div className="">
                        <TextInput placeholder="leave your appreciation" />
                    </div>
                </div>
            </div> 
            <div className="grid gap-4 md:grid-cols-2 m-2 p-1 border-l-2 border-l-orange-400">
                <div className="flex items-center justify-center">
                    <TextInput placeholder="Put in the matricule" />
                </div>
                <div className="grid gap-4">
                    <div className="">
                        <TextInput placeholder="Set the note"/>
                    </div>
                    <div className="">
                        <TextInput placeholder="leave your appreciation" />
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default Notes