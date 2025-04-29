import React, { useState } from "react";

const PrincipioMultiplicativo = () => {
  const [steps, setSteps] = useState([1]);
  const [result, setResult] = useState(1);

  const updateStep = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = parseInt(value) || 0;
    setSteps(newSteps);
    calculateResult(newSteps);
  };

  const addStep = () => {
    const newSteps = [...steps, 1];
    setSteps(newSteps);
    calculateResult(newSteps);
  };

  const removeStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
    calculateResult(newSteps);
  };

  const calculateResult = (steps) => {
    const product = steps.reduce((acc, val) => acc * val, 1);
    setResult(product);
  };

  return (
    <div style={{ position: "relative", top: "64px" }}>
      {steps.map((value, index) => (
        <div key={index}>
          <input
            type="number"
            value={value}
            min="0"
            onChange={(e) => updateStep(index, e.target.value)}
          />
          {steps.length > 1 && (
            <button
              onClick={() => removeStep(index)}
            >
              Remover
            </button>
          )}
        </div>
      ))}
      <button
        onClick={addStep}
      >
        Adicionar Etapa
      </button>
      <div>
        Total de combinações: <strong>{result}</strong>
      </div>
    </div>
  );
};

export default PrincipioMultiplicativo;