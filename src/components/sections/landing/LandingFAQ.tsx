import { useState } from "react";
import FAQCard from "@/components/cards/FAQCard";
import { FAQData } from "@/helpers/constants";

const LandingFAQ = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <div className="container mx-auto overflow-hidden">
            <section className="landing__FAQ py-24 lg:pt-30 px-10 lg:px-56 bg-white">
                <div className="FAQ-header flex flex-col items-center gap-2">
                    <h4 className="text-4xl text-green01 calSans text-center">
                        Faire aux questions
                    </h4>
                    <p className="text-white01 text-center lg:text-lg">
                        Pour vous aider à comprendre notre essence
                    </p>
                </div>
                <div className="FAQ-content flex flex-col gap-10 mt-14">
                    {FAQData.map((item, index) => (
                        <FAQCard
                            key={index}
                            {...item}
                            isActive={activeIndex === index}
                            handleToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingFAQ;
