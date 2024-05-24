import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

interface Itext {
    text: string
}

const Loading = ({ text }: Itext): JSX.Element => {
    return (
        <section className="fixed top-0 z-50 w-full h-screen bg-white02 flex flex-col gap-4 items-center justify-center" style={{ backgroundColor: `#ffffffba` }}>
            <DotLottiePlayer
                autoplay={true}
                loop={true}
                src="/Animation - 1716523850965.json"
                style={{ width: "4.4em", height: "4.4em", objectFit: "cover" }}
            />
            <h3 className="text-green02 generalSans-Medium">{text}</h3>
        </section>
    );
};

export default Loading;