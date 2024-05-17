const LandingFooter = (): JSX.Element => {
    return (
        <div className="container mx-auto w-full">
            <footer className="landing__footer flex flex-col md:flex-row md:justify-between items-center pt-10 md:pt-5 pb-10 md:pb-16 px-10 md:px-44 bg-white gap-6">
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