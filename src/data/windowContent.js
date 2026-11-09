import AboutWindow from "../components/windows/AboutWindow";
import ProjectsWindow from "../components/windows/ProjectsWindow";
import SkillsWindow from "../components/windows/SkillsWindow";
import ExperienceWindow from "../components/windows/ExperienceWindow";
import ContactWindow from "../components/windows/ContactWindow";

export const windowContent = {
  about: {
    title: { en: "ABOUT", fr: "À PROPOS" },
    component: AboutWindow,
    width: "70vw",
    height: "70vh",
    theme: "about",
  },

  projects: {
    title: { en: "PROJECTS", fr: "PROJETS" },
    component: ProjectsWindow,
    width: "80vw",
    height: "80vh",
    theme: "projects",
  },

  contact: {
    title: "CONTACT",
    component: ContactWindow,
    width: "max(50vw, 680px)",
    height: "max(50vh, 440px)",
    theme: "terminal",
  },

  skills: {
    title: { en: "SKILLS", fr: "COMPÉTENCES" },
    component: SkillsWindow,
    width: "70vw",
    height: "80vh",
    theme: "skills",
  },

  experiences: {
    title: { en: "EXPERIENCES", fr: "EXPÉRIENCES" },
    component: ExperienceWindow,
    width: "70vw",
    height: "85vh",
    theme: "experience",
  },
};