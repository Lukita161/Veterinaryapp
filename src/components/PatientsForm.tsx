import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormError } from "./FormError";
import { DraftPatiens } from "../types";
import { usePatientsStore } from "../store";
import { useEffect } from "react";


export default function PatientForm() {

	const { register, handleSubmit, formState: {errors}, setValue, reset } = useForm<DraftPatiens>()

  const { addPatiens, ActiveId, Patients, updatePatients } = usePatientsStore()

  useEffect(()=> {
    const activePacient = Patients.filter(patient => patient.id === ActiveId)[0]
    if(activePacient) {
      setValue('name', activePacient.name)
      setValue('caretaker', activePacient.caretaker)
      setValue('email', activePacient.email)
      setValue('date', activePacient.date)
      setValue('symptoms', activePacient.symptoms)
    }
    
  },[ActiveId])

	const onSubmit = (data: DraftPatiens) => {
    if (ActiveId) {
      toast.success('Se ha editado correctamente')
      updatePatients(data)
    } else {
      toast.success('Se ha agregado correctamente')
      addPatiens(data)
    }
    reset()
	}
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-gray-800 text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
				onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
						{...register('name', {
							required: 'Necesitas ingresar un nombre'
						})}
						
          />
					{errors.name && (
						<FormError>{errors.name.message}</FormError>
						)}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
						{...register('caretaker', {
							required: 'El nombre del propietario es necesario'
						})}
          />
					{errors.caretaker && (
						<FormError>{errors.caretaker.message}</FormError>
					)}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
						{...register('email', {
							required: 'El correo electronico es necesario',
							pattern: {
								value:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
								message: 'El email no es valido'
							}
						})}
          />
					{errors.email && (
						<FormError>{errors.email.message}</FormError>
					)}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
						{...register('date', {
							required: 'La fecha es necesaria'
						})}
          />
					{errors.date && (
						<FormError>{errors.date.message}</FormError>
					)}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
						{...register('symptoms', {
							required: 'Los sintomas son necesarios'
						})}
          />
					{errors.symptoms && (
						<FormError>{errors.symptoms.message}</FormError>
					)}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
