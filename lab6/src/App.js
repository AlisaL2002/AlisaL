import './App.css';
import { useCallback, useState } from 'react';
import  { DurationExercise }  from './components/DurationExercise';


const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";

function RepetitionExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "5em" }}>{count}</p>
      <button style={{ fontSize: "2em" }} onClick={() => setCount(count => count + 1)}>Increment</button>
      <button style={{ fontSize: "2em" }} onClick={() => setCount(0)}>Reset</button><br/>
      <button style={{ fontSize: "2em" }} onClick={() => setMenuScreen(MENU_SCREEN)}>Return to Menu</button> 
      
    </div>
  );
}

let exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },
];

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN); // Seting the initial screen to MENU_SCREEN to select an exercise
  let [currentExercise, setCurrentExercise] = useState(null); // Initialized with null since no exercise is selected initially

  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []); 

  let screenComponent = undefined;

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map(exercise => (
            <li key={exercise.name}> 
              <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN && currentExercise) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      default:
        screenComponent = <p>Invalid exercise type</p>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;