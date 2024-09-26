import { usePatientsStore } from "../store";
import { PatientsDetail } from "./PatientsDetail";

export const PatientsList = () => {
  const { Patients } = usePatientsStore();
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 h-3/5 md:h-screen overflow-y-scroll">
      {Patients.length > 0 ? (
        <>
          <h2 className="font-black text-gray-800 text-3xl text-center">
            Aquí está la {" "}
            <span className="text-pink-500 font-bold">Lista de Pacientes</span>
          </h2>
					<p className="text-lg mt-5 text-center mb-10 text-gray-800">Puedes administrarlos desde aquí</p>

          {Patients.map((patient) => (
            <PatientsDetail pacientes={patient} />
          ))}
        </>
      ) : (
        <p className="font-black text-3xl text-center text-gray-800">Comience agregando {''}
				<span className="text-pink-500 font-bold">Pacientes</span>
				</p>
      )}
    </div>
  );
};
