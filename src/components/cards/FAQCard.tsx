import { IFAQCard } from "@/utils/interfaces";
import { useState } from "react";

interface FAQCardProps extends IFAQCard {
    isActive: boolean;
    handleToggle: () => void;
}

const FAQCard = ({ text, title, isActive, handleToggle }: FAQCardProps): JSX.Element => {
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
            className={`FAQ-card flex w-full rounded-xl cursor-pointer ${isActive ? "sticky-open" : "sticky-close"}  ${isActive ? "border-2 border-green01 items-start gap-12 p-10" : "items-center justify-between  py-6 px-10"}`}
            onClick={() => { handleToggle(); handleImageClick() }}
        >
            <div className={`header ${isActive && "flex flex-col gap-5"}`}>
                <h3 className="text-2xl text-blue01 calSans">{title}</h3>
                <p className={`text-blue02  ${isActive ? "flex" : "hidden"}`}>{text}</p>
            </div>
            <img
                src={isActive ? "/icons/chevron-circle-down.svg" : "/icons/chevron-circle-right.svg"}
                className={`cursor-pointer ${isRotating && "rotate"}`}
            // onClick={handleImageClick}
            />
        </article>
    );
};

export default FAQCard;
