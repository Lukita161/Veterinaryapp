type PatientsDetailText = {
    label: string,
    value: string
}

export const PatientsDetailText = ({ label, value }: PatientsDetailText)=> {
    return (
        <h1 className="text-gray-900 text-lg text-pretty font-bold">{label}: {''}
            <span className="text-base text-gray-800">{value}</span>
        </h1>
    )
}