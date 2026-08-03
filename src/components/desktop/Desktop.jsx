import FolderIcon from "./FolderIcon";
import Window from "./Window";
import Taskbar from "./TaskBar";
import background from "../../assets/images/background.png";
import githubIcon from "../../assets/icons/github.webp";
import linkedinIcon from "../../assets/icons/linkedin.webp";
import AppIcon from "./AppIcon";
import { useState } from "react";
import { windowContent } from "../../data/windowContent";

const folders = [
    { id: "about", name: "About" },
    { id: "experiences", name: "Experiences" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" },
];

const apps = [
    {
        name: "GitHub",
        icon: githubIcon,
        url: "https://github.com/Hugoddb",
    },
    {
        name: "LinkedIn",
        icon: linkedinIcon,
        url: "https://www.linkedin.com/in/hugo-de-dreux-br%C3%A9z%C3%A9-9b844934a/",
    },
];

function Desktop() {
  
    const handleFolderClick = (id) => {
        setOpenWindow(id);
    };
    const closeWindow = () => {
        setOpenWindow(null);
    };

    const [openWindow, setOpenWindow] = useState(null);

    const currentWindow = windowContent[openWindow];
    const ActiveComponent = currentWindow?.component;
    
    return (
    
        <div
            className="h-screen w-screen p-6 flex flex-col bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >

        <div className="absolute top-8 right-8 flex flex-col gap-6">
        {apps.map((app) => (
            <AppIcon
            key={app.name}
            {...app}
            />
        ))}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-medium">
                Hugo de Dreux-Brézé
            </h1>

            <h2 className="text-slate-400 text-lg font-normal mt-2"> 
                Developer / EPITECH Lyon
            </h2>

        </div>

    <div className="flex justify-center gap-20 mb-50">
        {folders.map((folder) => (
        <FolderIcon
            key={folder.id}
            folder={folder}
            onClick={handleFolderClick}
        />
        ))}
    </div>

    {ActiveComponent && (
    <Window
        title={currentWindow.title}
        content={<ActiveComponent />}
        width={currentWindow.width}
        height={currentWindow.height}
        theme={currentWindow.theme}
        onClose={closeWindow}
    />
    )}

    <Taskbar/>

    </div>
  );
}

export default Desktop;