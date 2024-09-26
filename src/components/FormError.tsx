import { ReactNode } from "react";
type FormErrorProps = {
    children: ReactNode
}
export const FormError = ({ children }: FormErrorProps)=> {
    return (
        <p className="mt-3 font-black text-white uppercase text-sm bg-red-500 text-center rounded-sm">{ children }</p>
    )
}