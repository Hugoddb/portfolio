import folderIcon from "../../assets/icons/folder.png";

function FolderIcon({ folder, onClick }) {
    return (
        <div 
            onClick={() => onClick(folder.id)} 
            className="flex flex-col items-center gap-1 w-30 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-sky-400/20">
        <img
            src={folderIcon}
            alt={folder.name}
            className="w-14 h-14"
        />

        <span className="text-white text-sm text-center">
            {folder.name}
        </span>
        
        </div>
    );
}

export default FolderIcon;