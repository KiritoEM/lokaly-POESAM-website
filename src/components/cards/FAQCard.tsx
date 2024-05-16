import { IFAQCard } from "@/utils/interfaces";

interface FAQCardProps extends IFAQCard {
    isActive: boolean;
    handleToggle: () => void;
}

const FAQCard = ({ text, title, isActive, handleToggle }: FAQCardProps): JSX.Element => {
    return (
        <article className={`FAQ-card flex w-full rounded-xl ${isActive ? "border-2 border-green01 items-center gap-12 p-10" : "items-center justify-between py-6 px-10"}`}>
            <div className="header flex flex-col gap-5">
                <h3 className="text-2xl text-blue01 calSans">{title}</h3>
                <p className={`text-blue02 ${isActive ? "flex" : "hidden"}`}>{text}</p>
            </div>
            {isActive ?
                (<img src="/icons/chevron-circle-down.svg" className="cursor-pointer" onClick={handleToggle} />) : (<img src="/icons/chevron-circle-right.svg" className="cursor-pointer" onClick={handleToggle} />)}
        </article>
    );
};

export default FAQCard;
