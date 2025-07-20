import { FaCogs, FaServer, FaLaptopCode } from "react-icons/fa";

const useSkills = () => {
  const skills = [
    {
        icon: FaLaptopCode,
        title: "Frontend Development",
        description: "I create responsive, user-friendly interfaces that prioritize seamless interaction and performance.",
        skills: [
            "Javascript",
            "TypeScript",
            "React.js",
            "Next.js",
            "HTML/CSS",
            "Zustand",
            "Chakra UI",
            "Tailwind CSS",
            "Responsive Design",
            "WordPress",
        ]
    },
    {
        icon: FaServer,
        title: "Backend Development",
        description: "I build scalable, secure backend systems that power efficient data management and smooth user experiences.",
        skills: [
            "Python",
            "Flask",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
            "Authentication & Authorization (JWT)",
        ],
    },
    {
        icon: FaCogs,
        title: "DevOps",
        description: "I streamline development and operations through automation, continuous integration and scalable deployment.",
        skills: [
            "Version Control (Git)",
            "Linux Administration",
            "CI/CD (Jenkins, GitHub Actions)",
            "Containerization (Docker)",
            "Orchestration (Kubernetes)",
            "Infrastructure as Code (Ansible)",
            "Cloud Platforms (AWS, GCP)",
        ],
    }
  ]; 
  return skills;
}

export default useSkills;