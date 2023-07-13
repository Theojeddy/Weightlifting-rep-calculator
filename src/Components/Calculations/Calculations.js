import BenchPresscalc from "./BenchPresscalc";
import Deadliftcalc from "./Deadliftcalc";
import Squatcalc from "./Squatcalc";

export default function Calculations({ completed }) {
  let exercise = completed.exercise;
  let weight = completed.weight;
  let reps = completed.reps;

  if (exercise === "Bench Press") {
    return <BenchPresscalc completed={completed} />;
  } else if (exercise === "Deadlift") {
    return <Deadliftcalc completed={completed} />;
  } else if (exercise === "Squat") {
    return <Squatcalc completed={completed} />;
  } else {
    return <div>Please fill out the form and press submit</div>;
  }
}

//   return (
//     <div>
//       <h1>Exercise: {exercise}</h1>
//       <h1>Weight: {weight}</h1>
//       <h1>Reps: {reps}</h1>
//     </div>
//   );
// }
