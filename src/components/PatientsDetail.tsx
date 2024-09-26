import { usePatientsStore } from "../store"
import { Patiens } from "../types"
import { PatientsDetailText } from "./PatientsDetailText"

import { toast } from "react-toastify"

type PatientsDetail = {
    pacientes: Patiens
}

export const PatientsDetail = ({ pacientes }: PatientsDetail)=> {
    const { deletePatients, setActiveId } = usePatientsStore()
    const handleClick = ()=> {
        toast.error('Se ha borrado correctamente')
        deletePatients(pacientes.id)
    }
    return (
        <div className="w-full bg-white rounded-lg space-y-2 shadow-lg p-8 mt-10 mb-10">
            <PatientsDetailText label="Nombre" value={pacientes.name} />
            <PatientsDetailText label="Propietario" value={pacientes.caretaker} />
            <PatientsDetailText label="Email" value={pacientes.email} />
            <PatientsDetailText label="Fecha de Alta" value={pacientes.date.toString()} />
            <PatientsDetailText label="Sintomas" value={pacientes.symptoms} />
            <div className="flex flex-col md:flex-row justify-between">
                <button onClick={()=>setActiveId(pacientes.id)} className="bg-pink-400 p-2 rounded-lg w-24 text-white uppercase text-center text-sm hover:bg-pink-500">
                    Editar
                </button>
                <button onClick={handleClick} className="bg-red-500 p-2 rounded-lg w-24 text-white uppercase text-center text-sm hover:bg-red-600">
                    Borrar
                </button>
            </div>
        </div>
    )
    
}