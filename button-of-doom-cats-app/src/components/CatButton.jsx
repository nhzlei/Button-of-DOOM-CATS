import { useRef } from 'react';
import meowSound from '../assets/meow_sound1.mp3';

function CatButton({ onClick }) {
  const audioRef = useRef(null);

  const handleClick = () => {
    onClick();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="cat-button_position">
        <button className="cat-button" onClick={handleClick}></button>
      </div>
      <audio ref={audioRef} src={meowSound}></audio>
    </>
  );
}

export default CatButton;