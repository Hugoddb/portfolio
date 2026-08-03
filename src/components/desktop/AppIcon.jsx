function AppIcon({ name, icon, url }) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 w-24 p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-sky-400/20"
      >
        <img
          src={icon}
          alt={name}
          className="w-14 h-14"
        />
  
        <span className="text-white text-sm text-center">
          {name}
        </span>
      </a>
    );
  }
  
  export default AppIcon;