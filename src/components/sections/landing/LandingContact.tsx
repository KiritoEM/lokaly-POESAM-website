const LandingContact = (): JSX.Element => {
    return (
        <section className="landing__contact  bg-[url('/contact-bg.png')] py-20 px-10 lg:px-36 w-full bg-contain bg-no-repeat bg-center flex gap-10">
            <div className="contact-header w-2/5 flex flex-col gap-5">
                <h2 className="text-4xl text-blue01 calSans">Prenez contact avec nous</h2>
                <p>Vous avez quelque chose à ajouter? Un partenariat à discuter? ou quelque chose à faire passer?
                    Remplissez le formulaire suivant</p>
            </div>
            <div className="contact-form w-3/5"></div>
        </section>
    );
};

export default LandingContact