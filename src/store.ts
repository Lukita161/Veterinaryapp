import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import { DraftPatiens, Patiens } from "./types";
import { v4 as uuidv4 } from 'uuid'


type PatientsStore = {
    Patients: Patiens[]
    ActiveId: string
    addPatiens: (data: DraftPatiens) => void
    deletePatients: (id: Patiens['id']) => void
    setActiveId: (id: Patiens['id']) => void
    updatePatients: (data: DraftPatiens) => void
}
const setDraftPatientsToPatients = (patiens: DraftPatiens)=> {
    return {id: uuidv4(), ...patiens }
}
export const usePatientsStore = create<PatientsStore>()(
    devtools(
        persist(
        (set) => ({
            Patients: [],
            ActiveId: '',
            addPatiens: (data)=> {
                const newPatient = setDraftPatientsToPatients(data)

                set((state) => ({
                    Patients: [...state.Patients, newPatient]
                }))
            },
            deletePatients: (id)=> {

                set((state)=> ({
                    Patients: state.Patients.filter(patient=> patient.id !== id)
                }))
            },
            setActiveId: (id)=> {
                set(()=> ({
                    ActiveId: id
                }))
            },
            updatePatients: (data) => {
                set((state)=> ({
                    Patients: state.Patients.map(patient => patient.id === state.ActiveId ? {id: uuidv4(), ...data} : patient),
                    ActiveId: ''
                }))
            }
        })
    ,{
        name: 'Storage-Patients'
    })
))