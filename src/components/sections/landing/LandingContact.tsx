import InputComponent01 from "@/components/inputs/InputComponent01";

const LandingContact = (): JSX.Element => {
    return (
        <section className="landing__contact bg-[url('/contact-bg.svg')] py-20 px-10 lg:px-40 w-full bg-contain bg-no-repeat bg-center flex items-end gap-10">
            <div className="contact-header w-2/5 flex flex-col gap-7 mb-20">
                <h2 className="text-4xl text-blue01 calSans">Prenez contact avec nous</h2>
                <p className="text-blue02">Vous avez quelque chose à ajouter? Un partenariat à discuter? ou quelque chose à faire passer?
                    Remplissez le formulaire suivant</p>
            </div>
            <div className="contact-form w-3/5 h-max bg-white rounded-xl p-9 flex flex-col gap-6">
                <InputComponent01 type="text" placeholder="Votre nom" />
                <InputComponent01 type="email" placeholder="Adresse mail" />
                <InputComponent01 type="email" placeholder="Numéro de téléphone" />

                {/* text-area */}
                <textarea placeholder="Votre message" className="w-full h-40 border border-blue01 opacity-30 placeholder:text-blue01 py-4 px-4 rounded-md text-sm"></textarea>
                <button className="text-sm bg-green01 w-max px-12 py-3 rounded-xl text-white mt-6">Envoyer</button>
            </div>
        </section>
    );
};

export default LandingContact