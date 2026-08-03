import AboutWindow from "../components/windows/AboutWindow";
import ProjectsWindow from "../components/windows/ProjectsWindow";
import SkillsWindow from "../components/windows/SkillsWindow";
import ExperienceWindow from "../components/windows/ExperienceWindow";
import ContactWindow from "../components/windows/ContactWindow";

export const windowContent = {
  about: {
    title: "ABOUT",
    component: AboutWindow,
    width: "70vw",
    height: "70vh",
    theme: "about",
  },

  projects: {
    title: "PROJECTS",
    component: ProjectsWindow,
    width: "70vw",
    height: "70vh",
    theme: "projects",
  },

  contact: {
    title: "CONTACT",
    component: ContactWindow,
    width: "60vw",
    height: "55vh",
    theme: "terminal",
  },

  skills: {
    title: "SKILLS",
    component: SkillsWindow,
    width: "70vw",
    height: "80vh",
    theme: "skills",
  },

  experiences: {
    title: "EXPERIENCES",
    component: ExperienceWindow,
    width: "70vw",
    height: "85vh",
    theme: "experience",
  },
};