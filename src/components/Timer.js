import React, { Component } from "react";
import swal from "sweetalert";

// function Timer(props) {
//   const { h2ofrequency } = props;
//   let initialTimer = h2ofrequency * 10;
//   const [digit, setDigit] = useState(0);
//   let [counter, setCounter] = useState(0);

//   setInterval(() => setCounter(counter++), 1000);

//   useEffect(
//     () =>
//       setInterval(() => {
//         initialTimer++;
//         setDigit(initialTimer);
//       }, 1000),
//     [counter]
//   );
//   return (
//     <div class="progress">
//       <div>{digit} days</div>
//     </div>
//   );
// }
let readyPlantArr = [];
class Timer extends Component {
  constructor(props) {
    const { h2ofrequency } = props;
    super(props);
    this.myRef = React.createRef();
    this.state = {
      hours: h2ofrequency * 24,
    };
  }

  componentDidMount = () => {
    const blueBar = this.myRef.current;

    console.log(blueBar.style.width);
    setInterval(() => {
      let percentDone = Math.floor(
        (this.state.hours / (this.props.h2ofrequency * 24)) * 100
      );
      blueBar.style.width = `${percentDone}%`;
      //   console.log(percentDone);
      this.setState((prevState) => ({
        hours: prevState.hours - 1,
      }));
    }, 2000);
  };

  render() {
    if (this.state.hours === 0) {
      readyPlantArr.push(`${this.props.plant_nickname}`);
      const readyPlants = Array.from(new Set(readyPlantArr)).join(", ");
      //   window.confirm(`It's time to water ${this.props.plant_nickname}`);

      swal(
        "Watering Time!",
        `Please water the following plants: ${readyPlants}`
      );
      this.setState(() => ({
        hours: this.props.h2ofrequency * 24,
      }));

      setTimeout(() => {
        readyPlantArr = [];
      }, 3600000);
    }
    return (
      <div style={{ width: "100%" }}>
        <div
          style={{
            zIndex: "2",
            position: "absolute",
            left: "0",
            right: "0",
          }}
        >
          {this.state.hours > 0 ? this.state.hours : "0"} Hours
        </div>
        <div
          ref={this.myRef}
          className=".dynamic-progress-bar"
          style={{
            backgroundColor: "lightblue",

            width: "100%",
          }}
        >
          <p style={{ opacity: "0" }}>*takesupspace</p>
        </div>
      </div>
    );
  }
}

export default Timer;
