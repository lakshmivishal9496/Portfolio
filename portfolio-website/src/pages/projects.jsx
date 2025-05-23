import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { FaLeaf, FaUniversity, FaHeartbeat, FaServer } from "react-icons/fa";

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="bg-[#f0f4f8] min-h-screen">
                <div className="pt-[120px] px-4 sm:px-6 lg:px-8 pb-16 max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-primary mb-10">
                        My Projects
                    </h1>

                    <div className="flex_proj">

                        <ProjectCard className="log"
                            title="Virtual Gardener"
                            description="An IoT-powered mobile application designed to help users monitor the health of their plants in real time. I designed the interface to visualize sensor data (temperature, humidity, soil moisture, and plant smell) using clean, accessible charts. The app also alerts users of plant diseases via smell detection (ammonia emission), offering actionable advice through intuitive UX. Built with Firebase backend, Jetpack Compose, and real-time weather API integration."
                            figmaLink="https://www.figma.com/design/3I1Clqzpi4LdUOSiRA6IU3/Virtual-Gardener--Copy-?node-id=0-1&p=f&t=kOc02szfc3XoOSo0-0"
                            imageSrc="/assets/virtualgardner.png"



                        />

                        <ProjectCard className="log"
                            title="Sports Union Website"
                            description="A full-stack event management platform built for university students to register, manage, and participate in sports events. The site features dual roles (admin & student), real-time event listings, registration tracking, and booking history. I designed the responsive UI using Figma and implemented the frontend in React with a Node.js backend and MongoDB database. The goal was to simplify student interactions with events while offering admins intuitive tools for event scheduling and analytics."
                            figmaLink="https://www.figma.com/design/iAEBH2D7RQWcpzFFZfVuvT/HkIF?t=kOc02szfc3XoOSo0-0"
                            imageSrc="/assets/sportunion.png"
                            icon={<FaUniversity />}
                        />

                        <ProjectCard className="log"
                            title="Soft Health Desktop App"
                            description="A desktop application promoting mental well-being based on MBTI personality types. I led the UI design to create a calm, non-intrusive interface where users complete self-assessments. Based on results, the app provides personalized mental health tips, music suggestions, and yoga routines. Developed in Python with Tkinter, the system emphasizes empathy in UX, balancing science-based insights with thoughtful interface design to encourage daily wellness habits."
                            imageSrc="/assets/logo_200x200.png"
                            icon={<FaHeartbeat />}
                        />

                        <ProjectCard className="log"
                            title="Log Analysis Dashboard (Thesis)"
                            description="A multi-agent LLM-powered web dashboard designed to assist QA engineers in understanding system-level logs from access control devices. I designed a tool that summarizes logs using AI orchestration (AutoGen), including retriever, analyzer, summarizer, and validator agents. The dashboard visualizes event sequences, detects root causes, and reduces manual log review time. It supports Figma-based user flows, real-time JSON parsing, and integrates custom-trained AI models. This project combines UX strategy with technical research on interpretability and hallucination mitigation."
                            figmaLink="https://www.figma.com/design/N4lC2XzR0YTCr7pNfylcKF/Axis_Log_Analysis?node-id=15-16&t=LjA5I6JzPoNhnA0b-0"
                            imageSrc="/assets/thesis.png"

                            icon={<FaServer />}
                        />
                        <ProjectCard className="log"
                            title="Axis Camera Station UX Case Study"
                            description="A UX case study focused on improving the log analysis and system testing experience within the Axis Camera Station ecosystem. I collaborated with QA testers to identify pain points in understanding access control events and disconnection patterns. Through user research, I designed personas, site maps, and user flows tailored to system testers' real workflows. The case study emphasizes accessibility improvements (WCAG contrast checks), data visualization for log timelines, and context-aware AI-generated summaries using AutoGen agents. This project bridges design, AI, and user empathy in a security-critical product."
                            figmaLink="https://miro.com/app/board/uXjVIGR5dps=/"
                            imageSrc="/assets/thesis.png"
                            icon={<FaServer />}
                        />


                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
