import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct a prompt based on user input
    const prompt = `I am a ${age}-year-old person with a height of ${height} cm. 
      My current weight is ${currentWeight} kg, and I want to reach a weight of ${targetWeight} kg. 
      Recommend me a meal and activity.`;

    axios
      .post(HTTP, { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container container-sm p-1">
      <h1 className="title text-center text-darkGreen">ChatGPT API</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="height">Height (in cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentWeight">Current Weight (in kg):</label>
          <input
            type="number"
            id="currentWeight"
            name="currentWeight"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="targetWeight">Target Weight (in kg):</label>
          <input
            type="number"
            id="targetWeight"
            name="targetWeight"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-accept w-100" type="submit">
          Get Recommendations
        </button>
      </form>
      <div className="bg-darkGreen mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
  );
}
