import { useState, useEffect } from 'react'
import './style.css'
import CatButton from './components/CatButton'
import Upgrade from './components/Upgrade'
import upgradeImg from './assets/upgrade1.png'

function App() {
  const [points, setPoints] = useState(0);
  const [upgrades, setUpgrades] = useState([
    { id: 1, name: 'Treats', cost: 10, level: 0, increase: 1, img: upgradeImg },
    { id: 2, name: 'Super Treats', cost: 50, level: 0, increase: 5, img: upgradeImg }
  ]);
  const [perSecond, setPerSecond] = useState(0);

  useEffect(() => {
    const total = upgrades.reduce((sum, u) => sum + u.level * u.increase, 0);
    setPerSecond(total);
  }, [upgrades]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(p => p + perSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [perSecond]);

  const catClicked = () => {
    setPoints(p => p + 1);
  };

  const buyTreat = (upgrade) => {
    if (points >= upgrade.cost) {
      setPoints(p => p - upgrade.cost);
      setUpgrades(prev => prev.map(u => u.id === upgrade.id ? { ...u, level: u.level + 1, cost: Math.floor(u.cost * 1.5) } : u));
    }
  };

  return (
    <>
      <h1>click the fatty</h1>
      <section>
        <div className="main">
          <h2>chonk coins : <span className="point">{points}</span> (+{perSecond}/s)</h2>
          
          <div className="left_tab">
            {upgrades.map(upgrade => (
              <div key={upgrade.id} className={`buy_treat${upgrade.id}`}>
                <Upgrade 
                  onClick={() => buyTreat(upgrade)} 
                  cost={upgrade.cost} 
                  name={upgrade.name} 
                  level={upgrade.level} 
                  increase={upgrade.increase} 
                  img={upgrade.img} 
                />
              </div>
            ))}
          </div>
          
          <div className="center">
            <CatButton onClick={catClicked} />
          </div>
          
          <div className="right_tab">
            <div className="right">
            
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default App
