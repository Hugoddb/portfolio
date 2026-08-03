const themes = {
    about: {
        background: "bg-slate-800",
        header: "bg-slate-900",
        border: "border-slate-700",
    },

    terminal: {
        background: "bg-black",
        header: "bg-zinc-950",
        border: "border-green-500",
    },

    projects: {
        background: "bg-slate-900",
        header: "bg-blue-950",
        border: "border-blue-500",
    },

    skills: {
        background: "bg-slate-900",
        header: "bg-indigo-900",
        border: "border-indigo-500",
    },

    experience: {
        background: "bg-slate-900",
        header: "bg-emerald-900",
        border: "border-emerald-500",
    },
};

function Window({ title,content,width,height,theme,onClose,}) {

    const currentTheme = themes[theme];

    return (
        <div className="absolute inset-0 flex items-center justify-center">
        
        <div
        className={`${currentTheme.background} ${currentTheme.border} rounded-xl shadow-2xl border overflow-hidden`}
        style={{width, height,}}
        >
  
        <div
        className={`h-12 ${currentTheme.header} flex items-center justify-between px-4`}
        >
            <span className="text-white font-medium uppercase"> {title} </span>
            <button onClick={onClose} className="text-white hover:text-red-400 text-xl"> ✕ </button>
        </div>
  
        <div className="p-6 overflow-y-auto h-full">
            {content}
        </div>
  
        </div>
      </div>
    );
}
  
export default Window;