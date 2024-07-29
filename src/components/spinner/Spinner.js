import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner__wrapper">
      <div className="spinner__title">Идёт загрузка...</div>
      <svg width="35px" height="35px" viewBox="0 0 800 800">
        <circle
          className="spin2"
          cx="400"
          cy="400"
          fill="none"
          r="225"
          strokeWidth="47"
          stroke="#ffffff"
          strokeDasharray="323 1400"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Spinner;
