import { IinputComponent01 } from "@/utils/interfaces";
import { Fragment } from "react";

const InputComponent01 = ({ placeholder, type }: IinputComponent01): JSX.Element => {
    return <input type={type} placeholder={placeholder} className="input-component01 w-full border border-blue01 opacity-30 placeholder:text-blue01 py-4 px-4 rounded-md text-sm" />;
};

export default InputComponent01;