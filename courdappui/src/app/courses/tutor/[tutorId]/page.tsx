
import { Metadata } from 'next'

type Props = {
    params : Promise<{tutorId:string}>
}

export const generateMetadata = async ({
    params,
}:Props):Promise<Metadata> => {
    const id = (await params).tutorId
    return {
        title : `tutor- ${id}`
    }
}
const Page =async ({params}:Props) => {
    const id = (await params).tutorId
    console.log(id)
  return (
    <div>
      <h1>Tutor {id} </h1>
    </div>
  )
}

export default Page
