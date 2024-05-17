import InputComponent01 from "@/components/inputs/InputComponent01";

const LandingContact = (): JSX.Element => {
    return (
        <div className="container mx-auto">
            <section className="landing__contact bg-[url('/contact-bg.svg')] py-24 lg:py-30 px-10 lg:pl-36 lg:pr-40 w-full bg-cover bg-no-repeat bg-bottom flex flex-col md:flex-row  items-end gap-0 md:gap-10">
                <div className="contact-header md:w-3/5 flex flex-col gap-3 mb-20">
                    <h2 className="text-3xl md:text-4xl text-blue01 calSans">Prenez contact avec nous</h2>
                    <p className="text-blue02 md:text-lg">Vous avez quelque chose à ajouter? Un partenariat à discuter? ou quelque chose à faire passer?
                        Remplissez le formulaire suivant</p>
                </div>
                <div className="contact-form w-full md:w-3/5 h-max bg-white rounded-xl p-9 flex flex-col gap-6">
                    <InputComponent01 type="text" placeholder="Votre nom" />
                    <InputComponent01 type="email" placeholder="Adresse mail" />
                    <InputComponent01 type="email" placeholder="Numéro de téléphone" />

                    {/* text-area */}
                    <textarea placeholder="Votre message" className="w-full h-40 border border-blue01 opacity-30 placeholder:text-blue01 py-4 px-4 rounded-md text-sm"></textarea>
                    <button className="text-sm bg-green01 w-max px-12 py-3 rounded-xl text-white mt-6">Envoyer</button>
                </div>
            </section>
        </div>
    );
};

export default LandingContact