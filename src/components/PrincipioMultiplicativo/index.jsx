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
    <div className="p-4 max-w-md mx-auto">
      {steps.map((value, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="number"
            className="border px-2 py-1 mr-2 w-full"
            value={value}
            min="0"
            onChange={(e) => updateStep(index, e.target.value)}
          />
          {steps.length > 1 && (
            <button
              onClick={() => removeStep(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remover
            </button>
          )}
        </div>
      ))}
      <button
        onClick={addStep}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Adicionar Etapa
      </button>
      <div className="mt-4 text-lg">
        Total de combinações: <strong>{result}</strong>
      </div>
    </div>
  );
};

export default PrincipioMultiplicativo;