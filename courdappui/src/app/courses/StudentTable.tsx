import { TextInput, Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow }
    from "flowbite-react"
import { ArrowRightIcon } from "flowbite-react"
const StudentTable = () => {
    
    let students = [
        {
            matricule: 434,
            eleve: 'bob hubert',
            classe: '2nde C'
        },
        {
            matricule: 235,
            eleve: 'Hien Audrey',
            classe: '5 eme'
        },
        {
            matricule: 256,
            eleve: 'SAWADOGO GAIUS',
            classe: '2nd A'
        },
        {
            matricule: 876,
            eleve: 'Ildevert Meda',
            classe: '1ere'
        },
        {
            matricule: 1354,
            eleve: 'Kabore yves',
            classe: '6 eme'
        },
        {
            matricule: 1346,
            eleve: 'ANGE SY',
            classe: '3 eme'
        },
    ]
    return (
        <div className="flex flex-col m-6">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Matricule</TableHeadCell>
                        <TableHeadCell>Eleve</TableHeadCell>
                        <TableHeadCell>Classe</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        students.map((student, i) => {
                            const {matricule,eleve,classe} = student
                            return (
                                <TableRow key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {matricule}
                                    </TableCell>
                                    <TableCell>{eleve}</TableCell>
                                    <TableCell>{classe} </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default StudentTable