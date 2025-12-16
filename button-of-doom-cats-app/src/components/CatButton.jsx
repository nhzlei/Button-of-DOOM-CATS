import { useRef, useState } from 'react';
import meowSound from '../assets/meow_sound1.mp3';

function CatButton({ onClick }) {
  const audioRef = useRef(null);
  const [coins, setCoins] = useState([]);

  const handleClick = () => {
    onClick();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    for (let i = 0; i < 3; i++) {
      const id = Date.now() + i;
      const x = Math.random() * 200 - 30; // -30 to 30
      const y = Math.random() *  - 10; // -10 to 10
      setCoins(prev => [...prev, { id, x, y }]);
      setTimeout(() => setCoins(prev => prev.filter(c => c.id !== id)), 1000);
    }
  };

  return (
    <>
      <div className="cat-button_position">
        <button className="cat-button" onClick={handleClick}></button>
        {coins.map(coin => (
          <div 
            key={coin.id} 
            className="coin" 
            style={{ left: coin.x + 'px', top: coin.y + 'px' }}
          ></div>
        ))}
      </div>
      <audio ref={audioRef} src={meowSound}></audio>
    </>
  );
}

export default CatButton;