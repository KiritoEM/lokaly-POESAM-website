const LandingFooter = (): JSX.Element => {
    return (
        <div className="container mx-auto w-full">
            <footer className="landing__footer flex justify-between items-center pt-5 pb-16 px-44 bg-white">
                <div className="logo">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="copyright">
                    <p className="text-green05">© 2024 Lokaly. Tout droits réservés. </p>
                </div>
                <div className="social-icons flex gap-1">
                    <img src="/icons/fb-icon.svg" alt="fb" />
                    <img src="/icons/insta-icon.svg" alt="insta" />
                </div>
            </footer>
        </div>
    );
};

export default LandingFooter;