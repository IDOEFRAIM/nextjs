import { CheckIcon } from "flowbite-react"
import { Card } from "flowbite-react"

const Page = () =>{
    return (
        <div className="flex flex-col m-8">
            <header>
                <ol className="flex w-full items-center my-8">
                    <li className="flex w-full items-center text-sky-400 dark:text-sky-200 after:content-[''] after:w-full after:h-1 after:border-b
                     after:border-blue-100 after:border-4 after:inline-block dark:after:border-sky-400"
                    aria-hidden>
                        <span className="flex items-center justify-center w-10 h-10 bg-sky-100 rounded-full lg:h-12 lg:w-12
                         dark:bg-sky-400 shrink-0">
                            1 <CheckIcon color="blue"/>
                         </span>
                         
                    </li>
                    <li className="flex w-full items-center text-sky-400 dark:text-sky-200 after:content-[''] after:w-full after:h-1 after:border-b
                     after:border-blue-100 after:border-4 after:inline-block dark:after:border-sky-400"
                    aria-hidden>
                        <span className="flex items-center justify-center w-10 h-10 bg-sky-100 rounded-full lg:h-12 lg:w-12
                         dark:bg-sky-400 shrink-0">
                            2  <CheckIcon color="blue"/>
                         </span>
                        
                    </li>
                    <li className="flex w-full items-center text-sky-400 dark:text-sky-200 aria-hidden">
                        <span className="flex items-center justify-center w-10 h-10 bg-sky-100 rounded-full lg:h-12 lg:w-12
                         dark:bg-sky-400 shrink-0">
                            3 <CheckIcon color="blue"/>
                         </span>
                         
                    </li>
                </ol>         
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        <span className="bg-sky-400 rounded-full">
                        <CheckIcon className="h-12 w-12 bg-sky-600"></CheckIcon>
                    </span>
                    <h1 className="text-2xl">0</h1>
                    <span className="text-gray">lorem ipsum dolor sit nomentur sicut</span>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        <span className="bg-sky-400 rounded-full">
                        <CheckIcon className="h-12 w-12 bg-sky-600"></CheckIcon>
                    </span>
                    <h1 className="text-2xl">0</h1>
                    <span className="text-gray">lorem ipsum dolor sit nomentur sicut</span>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        <span className="bg-sky-400 rounded-full">
                        <CheckIcon className="h-12 w-12 bg-sky-600"></CheckIcon>
                    </span>
                    <h1 className="text-2xl">0</h1>
                    <span className="text-gray">lorem ipsum dolor sit nomentur sicut</span>
                    </div>
                </Card>

             </div> 
        </div>
    )
}

export default Page