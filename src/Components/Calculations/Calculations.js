export default function Calculations({ completed }) {
  let exercise = completed.exercise;
  let weight = completed.weight;
  let reps = completed.reps;

  return (
    <div>
      <h1>Exercise: {exercise}</h1>
      <h1>Weight: {weight}</h1>
      <h1>Reps: {reps}</h1>
    </div>
  );
}
