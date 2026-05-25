import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

export const SoundToggle = ({ isMuted, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative p-2 rounded-full border transition-all duration-300 ${
        isMuted 
          ? "border-red-500/50 text-red-500 bg-red-500/10" 
          : "border-[#1ed760]/50 text-[#1ed760] bg-[#1ed760]/10"
      } hover:scale-110 active:scale-95`}
      aria-label="Toggle Sound"
    >
      <div className="flex items-center justify-center w-5 h-5">
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
      </div>
      
      {/* Small glow effect when sound is on */}
      {!isMuted && (
        <span className="absolute inset-0 rounded-full bg-[#1ed760] opacity-20 animate-ping pointer-events-none" />
      )}
    </button>
  );
};
