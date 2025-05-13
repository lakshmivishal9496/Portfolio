import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-32 pb-16 text-center bg-[#f0f4f8] space-y-12">




                {/* Intro */}
                <h1 className="about-heading">About Me</h1>

                <section className="about-intro">
                    <p>
                        I'm a passionate <span className="font-bold text-gray-800">UI Designer</span> and
                        <span className="font-bold text-gray-800 ml-1"> UX Researcher</span> with a strong foundation in full-stack development,
                        focused on crafting intuitive and accessible digital experiences.
                    </p>

                </section>

                <section className="about-section-wide">
                    <h2 className="about-section-title">Skills & Tools</h2>
                    <ul className="about-skills-list">

                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>UX Research</li>
                        <li>React.js</li>
                        <li>Python</li>

                    </ul>
                </section>

                <section className="about-intro">
                    <p>
                        I'm a Software Development graduate from <span className="font-bold text-gray-800">Högskolan kristianstad</span> and I hold Master's Degree from University of Madras(India).
                        <span className="font-bold text-gray-800 ml-1"> I have done my thesis at Axis Communication Lund.</span> With a strong foundation in UI/UX and full-stack development.
                        I enjoy creating innovative designs and solving problems at the intersection of design, code and automation.
                    </p>
                </section>


                <section className="about-section">
                    <h2 className="about-section-title">Fun Fact</h2>
                    <p className="about-paragraph">
                        I once turned a casual doodle into a fully functional interactive mini-game design just for fun.
                        Surprisingly, it became a hit during a team meeting and was used as an icebreaker activity to lighten the mood!
                        It reminded me how creativity even in small, playful ideas can bring people together and spark engagement.
                    </p>
                </section>


            </div>
            <Footer />
        </>
    );
}
