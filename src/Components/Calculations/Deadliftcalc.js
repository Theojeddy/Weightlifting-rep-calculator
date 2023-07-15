//create a component for the calculations for the reps and weights of deadlift
export default function Deadliftcalc({completed}) {
  //breakdown the object into its catergories
  let exercise = completed.exercise;
  let weight = completed.weight;
  let reps = completed.reps;
  return (
  <div>deadlift calc
  <div>
      <h1>Exercise: {exercise}</h1>
      <h1>Weight: {weight}</h1>
       <h1>Reps: {reps}</h1>
   </div>
   </div>
)}
