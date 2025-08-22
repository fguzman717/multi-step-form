export default function Step4({
  stepFourFormData,
  setStepFourFormData,
  nextStep,
  prevStep,
}) {
  const handleChange = (event) => {
    setStepFourFormData({
      ...stepFourFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-step">
      <h2>Account Details</h2>
      <div className="account-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={stepFourFormData.username}
          onChange={handleChange}
        />
      </div>
      <div className="account-form">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={stepFourFormData.password}
          onChange={handleChange}
        />
        <small className="hint">
          Use at least 8 characters, including numbers and symbols.
        </small>
      </div>
      <div className="account-form">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm you Password"
          value={stepFourFormData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="navigation-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}
