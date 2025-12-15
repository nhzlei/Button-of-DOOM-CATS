import chonkCoinsImg from '../assets/chonk-coins.png';

function Upgrade({ onClick, cost, name, level, increase, img }) {
  return (
    <div className="upgrades" onClick={onClick}>
      <div className="left-section">
        <img src={img} alt="" className="upgrade-img" />
      </div>

      <div className="mid-section">
        <h4>{name}</h4>

        <div className="chonk-coins-info">
          <p>cost: <span className="treat-cost">{cost}</span></p>
          <img src={chonkCoinsImg} alt="" className="chonk-coins" />
        </div>

      </div>

      <div className="right-section">Level {level}</div>

      <div className="next_lvl_info">
        <p>
          +<span className="chonk-coin_increase">{increase}</span> chonk coins <br /> per second
        </p>
      </div>

    </div>
  );
}

export default Upgrade;