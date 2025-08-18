import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Review from "./components/Review";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    preferences: [],
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = {
    1: (
      <Step1
        formData={formData}
        setFormData={setFormData}
        nextStep={nextStep}
      />
    ),
    2: (
      <Step2
        formData={formData}
        setFormData={setFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    3: (
      <Step3
        formData={formData}
        setFormData={setFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    4: <Review formData={formData} prevStep={prevStep} />,
  };

  const renderStep = () => steps[currentStep] || null;

  return (
    <div className="form-container">
      <h1>Multi-Step Form</h1>
      {renderStep()}
    </div>
  );
}

export default App;
