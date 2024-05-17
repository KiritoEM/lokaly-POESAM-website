import { IinputComponent01 } from "@/utils/interfaces";
import { Fragment } from "react";

const InputComponent01 = ({ placeholder, type, name }: IinputComponent01): JSX.Element => {
    return <input type={type} placeholder={placeholder} name={name} className="input-component01 w-full border border-blue01 border-opacity-30 focus:border-green01 placeholder:opacity-30 text-blue01 placeholder:text-blue01 py-3 md:py-4 px-3 md:px-4 rounded-md text-sm" />;
};

export default InputComponent01;