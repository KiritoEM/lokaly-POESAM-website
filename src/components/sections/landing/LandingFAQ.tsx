import FAQCard from "@/components/cards/FAQCard";
import { FAQData } from "@/helpers/constants";

const LandingFAQ = (): JSX.Element => {
    return (
        <section className="landing__FAQ py-24 lg:pt-30 px-10 lg:px-56 bg-white">
            <div className="FAQ-header flex flex-col items-center gap-2">
                <h4 className="text-4xl text-green01 calSans text-center">
                    Faire aux questions
                </h4>
                <p className="text-white01  text-center  lg:text-lg">
                    Pour vous aidez à comprendre notre essence
                </p>
            </div>
            <div className="FAQ-content flex flex-col lg:flex-row gap-20 mt-14">
                {FAQData.map((item, index) => (
                    <FAQCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default LandingFAQ;