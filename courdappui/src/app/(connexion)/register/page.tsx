import { TextInput, Label, HelperText,Button } from "flowbite-react"

const Page = () => {
    return (
        <div className="flex flex-col px-4">
            <h2 className="text-2xl text-primary">Register</h2>
            <div>
                <div className="grid gap-1 my-4">
                    <Label>Nom</Label>
                    <TextInput placeholder="Veuillez entrer votre nom"></TextInput>
                    <HelperText>Potential error</HelperText>
                </div>
                <div className="grid gap-1 my-4">
                    <Label>Prenom</Label>
                    <TextInput placeholder="Veuillez entrer vos prenom"></TextInput>
                    <HelperText>Potential error</HelperText>
                </div>
                <div className="grid gap-1 my-4">
                    <Label>Mot de passe</Label>
                    <TextInput placeholder="Veuillez entrer votre mot de passe"></TextInput>
                    <HelperText>Potential error</HelperText>
                </div>
            </div>
            <Button size='md'>Submit</Button>
        </div>
    )
}

export default Page