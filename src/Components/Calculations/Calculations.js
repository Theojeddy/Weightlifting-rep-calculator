import BenchPresscalc from "./BenchPresscalc";
import Deadliftcalc from "./Deadliftcalc";
import Squatcalc from "./Squatcalc";
import '../../App/App.css'

export default function Calculations({ completed }) {
  let exercise = completed.exercise;
  

  if (exercise === "Bench Press") {
    return <BenchPresscalc completed={completed} />;
  } else if (exercise === "Deadlift") {
    return <Deadliftcalc completed={completed} />;
  } else if (exercise === "Squat") {
    return <Squatcalc completed={completed} />;
  } else {
    return (
      <div className=" row mt-4">
        <h4>Please fill out the form and press submit</h4>
      </div>
    
    );
  }
}
