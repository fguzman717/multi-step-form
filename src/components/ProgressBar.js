import React from "react";

export default function ProgressWithSteps({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-track">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
