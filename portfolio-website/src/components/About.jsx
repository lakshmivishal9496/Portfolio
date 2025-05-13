import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col items-center justify-center py-16">
                <Image
                    src="/assets/profile.jpg"
                    alt="Lakshmi Vishal"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <h1 className="text-4xl font-bold mt-6">Lakshmi Vishal</h1>
                <p className="mt-4 text-gray-700 max-w-2xl text-center">
                    I'm a UI/UX designer and developer with experience in creating engaging digital experiences.
                    I specialize in web and mobile app design, UX research, and frontend development.
                </p>
            </div>
        </>
    );
}
