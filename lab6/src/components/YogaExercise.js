import React from 'react';

// Creating a list of additional exercise options inside the Yoga menu options
export function YogaExercise({ setMenuScreen }) {
  return (
    <div>
      <h3>Yoga Exercises</h3>
      {/* Creating buttons for the list of additional exercise */}
      <button onClick={() => ("stretching")}>Stretching</button><br></br>
      <button onClick={() => ("meditation")}>Meditation</button><br></br>
     <button onClick={() => ("strengthYoga")}>Strength Yoga</button><br></br>
    <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  );
}

export default YogaExercise;