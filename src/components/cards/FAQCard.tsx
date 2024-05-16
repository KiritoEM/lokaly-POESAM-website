import { IFAQCard } from "@/utils/interfaces";
import { useState } from "react";

const FAQCard = ({ text, title }: IFAQCard): JSX.Element => {
    const [stickyState, setStickyState] = useState<boolean>(false);

    const handleSticky = () => {
        setStickyState(!stickyState);
    }

    return (
        <article className={`FAQ-card flex   w-full rounded-xl ${stickyState === true ? " border-2  border-green01 items-center gap-12 p-10" : "items-center justify-between py-6 px-10"}`}>
            <div className="header flex flex-col gap-5">
                <h3 className="text-2xl text-blue01 calSans">{title}</h3>
                <p className={`text-blue02 ${stickyState === true ? "flex" : "hidden"}`}>{text}</p>
            </div>
            {stickyState === true ?
                (<img src="/icons/chevron-circle-down.svg" className="cursor-pointer" onClick={handleSticky} />) : (<img src="/icons/chevron-circle-right.svg" className="cursor-pointer" onClick={handleSticky} />)}
        </article>
    );
};

export default FAQCard;