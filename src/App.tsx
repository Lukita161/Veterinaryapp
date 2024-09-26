import { ToastContainer } from "react-toastify"
import  PatientsForm  from "./components/PatientsForm"
import { PatientsList } from "./components/PatientsList"
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
      <div className="container items-center justify-center md:flex">
        <h1 className="mt-8 text-4xl font-black text-gray-700 text-center">Control de pacientes de 
          <span className="text-pink-400"> Veterinaria</span>
        </h1>  
      </div>
      <section className="container justify-between mx-5 mt-8 flex flex-col md:flex-row">
        <PatientsForm />
        <PatientsList />
        <ToastContainer />
      </section>
    </>
  )
}

export default App
