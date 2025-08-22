import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Review from "./components/Review";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [stepOneFormData, setStepOneFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
  });

  const [stepTwoFormData, setStepTwoFormData] = useState({
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

  const [stepThreeFormData, setStepThreeFormData] = useState({
    preferences: [],
    contactMethod: [],
  });

  const [stepFourFormData, setStepFourFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const fullFormData = {
    ...stepOneFormData,
    ...stepTwoFormData,
    ...stepThreeFormData,
    ...stepFourFormData,
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = {
    1: (
      <Step1
        stepOneFormData={stepOneFormData}
        setStepOneFormData={setStepOneFormData}
        nextStep={nextStep}
      />
    ),
    2: (
      <Step2
        stepTwoFormData={stepTwoFormData}
        setStepTwoFormData={setStepTwoFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    3: (
      <Step3
        stepThreeFormData={stepThreeFormData}
        setStepThreeFormData={setStepThreeFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    4: (
      <Step4
        stepFourFormData={stepFourFormData}
        setStepFourFormData={setStepFourFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    5: <Review fullFormData={fullFormData} prevStep={prevStep} />,
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
