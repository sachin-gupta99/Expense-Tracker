import PropTypes from "prop-types";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if(props.maxValue>0) {
    barFillHeight = Math.round((props.value/props.maxValue)*100) +'%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__individual">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default ChartBar;
