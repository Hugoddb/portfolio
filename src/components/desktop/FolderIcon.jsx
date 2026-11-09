import folderIcon from "../../assets/icons/folder.png";
import useLanguage from "../../i18n/LanguageContext";

function FolderIcon({ folder, onClick }) {

    const { t } = useLanguage();

    return (
        <button
            type="button"
            onClick={() => onClick(folder.id)}
            className="flex flex-col items-center gap-1 w-full md:w-30 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-sky-400/20 focus-visible:outline-2 focus-visible:outline-sky-400">
        <img
            src={folder.icon ?? folderIcon}
            alt=""
            className="w-12 h-12 md:w-14 md:h-14"
        />

        <span className="text-white text-xs md:text-sm text-center">
            {t(folder.name)}
        </span>

        </button>
    );
}

export default FolderIcon;
