import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  // Function to calculate BMI
  const calculateBmi = (e) => {
    e.preventDefault();

    // Convert weight and height to numbers
    const weightNum = parseInt(weight);
    const heightNum = parseInt(height);

    // Validation
    if (weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid weight and height.");
      return;
    }

    // Calculate BMI
    const heightInMeters = heightNum / 100;
    const bmiValue = (weightNum / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    // BMI category
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 25) {
      setCategory("Normal weight");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculateBmi}>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
          />{" "}
          <br />
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
          />{" "}
          <br />
          <button type="submit">Calculate My BMI</button>
        </form>
        {bmi && (
          <p>
            Your BMI is: {bmi} ({category})
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
