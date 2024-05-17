import { IFAQCard } from "@/utils/interfaces";
import { useState } from "react";


const FAQCard = ({ text, title, isActive, handleToggle }: IFAQCard): JSX.Element => {
    const [isRotating, setIsRotating] = useState<boolean>(false);

    //fonction pour la rotation de l' icone
    const handleImageClick = () => {
        setTimeout(() => {
            setIsRotating(true);
            console.log("rotating")
        }, 100)
    }

    return (
        <article
            className={`FAQ-card flex w-full rounded-xl cursor-pointer ${isActive ? "sticky-open" : "sticky-close"}  ${isActive ? "border-2 border-green01 items-start gap-12 p-10" : "items-center justify-between  py-5 md:py-6 px-8 md:px-10"}`}
            onClick={() => { handleToggle(); handleImageClick() }}
        >
            <div className={`header w-11/12	md:w-full ${isActive && "flex flex-col gap-5"}`}>
                <h3 className="text-xl md:text-2xl text-blue01 calSans">{title}</h3>
                <p className={`text-blue02  ${isActive ? "flex" : "hidden"}`}>{text}</p>
            </div>
            <img
                src={isActive ? "/icons/chevron-circle-down.svg" : "/icons/chevron-circle-right.svg"}
                className={`w-12 md:w-auto cursor-pointer absolute right-0  md:relative hidden md:flex ${isRotating && "rotate"}`}
            />
            <img
                src="/icons/chevron-circle-right.svg"
                className={`w-12 md:w-auto cursor-pointer absolute right-0 mr-12 md:relative md:hidden ${isActive && "md:hidden"}  ${isActive && "rotate-respons"}`}
            />
        </article>
    );
};

export default FAQCard;
