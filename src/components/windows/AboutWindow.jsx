import { MapPin, Cake, Download, Circle } from "lucide-react";

function AboutWindow() {
    return (
        <div className="h-full text-white p-6 overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-10 h-full">


            <div className="lg:w-80 lg:border-r lg:border-slate-700 lg:pr-10 flex flex-col">

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hugo
                <br />
                de Dreux-Brézé
            </h1>

            <h2 className="text-blue-400 text-lg md:text-xl mt-3">
                Full Stack Developer
            </h2>

            <div className="flex items-center gap-2 mt-5 text-green-400">
                <Circle
                size={10}
                fill="currentColor"
                className="animate-pulse"
                />

                <span>Available for internship</span>
            </div>

            <div className="pt-12">

                <a
                href="/cv/Hugo_de_Dreux-Breze_CV.pdf"
                download="CV_Hugo_de_Dreux-Breze.pdf"
                className="w-fit inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium"
                >
                <Download size={18} />
                Download CV
                </a>

            </div>


            </div>

            <div className="flex-1 flex flex-col">

            <section>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                About Me
                </h3>

                <p className="text-slate-300 leading-8 max-w-3xl">
                I am a third-year student at Epitech Lyon passionate about
                software development and modern user interfaces. I enjoy
                building clean, intuitive and high-performance applications
                while continuously learning new technologies.
                </p>
            </section>

            <section className="mt-10">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="bg-slate-700 rounded-xl px-5 py-4 flex items-center gap-4 min-w-52">

                    <MapPin className="text-blue-400" />

                    <div>
                    <p className="text-sm text-slate-400">City</p>
                    <p className="font-medium"> Lyon, France</p>
                    </div>

                </div>

                <div className="bg-slate-700 rounded-xl px-5 py-4 flex items-center gap-4 min-w-52">

                    <Cake className="text-blue-400" />
                    <div>
                    <p className="text-sm text-slate-400">Age</p>
                    <p className="font-medium">21 years old</p>
                    </div>

                </div>

                </div>

            </section>

            <section className="mt-10">

                <h3 className="text-xl md:text-2xl font-semibold mb-5">
                Passions
                </h3>

                <div className="flex flex-wrap justify-start gap-3">

                <div className="bg-slate-600 hover:bg-slate-600 transition px-4 py-3 rounded-full">
                    💻 Development
                </div>

                <div className="bg-slate-600 hover:bg-slate-600 transition px-4 py-3 rounded-full">
                    ⚽ Football
                </div>

                <div className="bg-slate-600 hover:bg-slate-600 transition px-4 py-3 rounded-full">
                    🎬 Cinema
                </div>

                <div className="bg-slate-600 hover:bg-slate-600 transition px-4 py-3 rounded-full">
                    🎵 Music
                </div>

                </div>

            </section>
            </div>

        </div>
        </div>
    );
}

export default AboutWindow;