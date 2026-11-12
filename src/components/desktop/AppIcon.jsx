function AppIcon({ name, icon, url, className = "", labelClassName = "text-white", widthClassName = "md:w-24" }) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center gap-1 w-full ${widthClassName} p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-sky-400/20 ${className}`}
      >
        <img
          src={icon}
          alt=""
          className="w-12 h-12 md:w-14 md:h-14"
        />

        <span className={`${labelClassName} text-xs md:text-sm text-center`}>
          {name}
        </span>
      </a>
    );
  }

  export default AppIcon;
