import { TextInput,Button } from 'flowbite-react'
const page = () => {
  return (
    <div className='mx-8'>
        <h1 className="text-2xl tex-gray-800 my-4">If you have forge your password ,you can recover it 
            by using your email.We trigger a process to allow you to change your password
        </h1>
      <div className="flex flex-col items-between">

            <TextInput placeholder='Enter your email'></TextInput>
            <Button>Submit</Button>
      </div>
    </div>
  )
}

export default page
