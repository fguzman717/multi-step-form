export default function Step3({
  stepThreeFormData,
  setStepThreeFormData,
  nextStep,
  prevStep,
}) {
  const handlePreferenceCheckbox = (event) => {
    const { checked, value } = event.target;
    let newPreferences = [...stepThreeFormData.preferences];
    if (checked) {
      newPreferences.push(value);
    } else {
      newPreferences = newPreferences.filter((pref) => pref !== value);
    }
    setStepThreeFormData({ ...stepThreeFormData, preferences: newPreferences });
  };

  const handleContactCheckbox = (event) => {
    const { checked, value } = event.target;
    let newContactMethod = [...stepThreeFormData.contactMethod];
    if (checked) {
      newContactMethod.push(value);
    } else {
      newContactMethod = newContactMethod.filter((method) => method !== value);
    }
    setStepThreeFormData({
      ...stepThreeFormData,
      contactMethod: newContactMethod,
    });
  };

  return (
    <div className="form-step">
      <h2>Step 3: Preferences & Contact Options</h2>
      <div className="preferences-section">
        <h3>Preferences</h3>
        <p className="description">
          Select the types of communications you would like to receive from us.
        </p>
        <label htmlFor="newsletters">
          Get our monthly newsletter with the latest updates and tips!
          <input
            type="checkbox"
            id="newsletters"
            value="Newsletters"
            checked={stepThreeFormData.preferences.includes("Newsletters")}
            onChange={handlePreferenceCheckbox}
          />
        </label>
        <label htmlFor="promotions">
          Receive special offers and promotional deals!
          <input
            type="checkbox"
            id="promotions"
            value="Promotions"
            checked={stepThreeFormData.preferences.includes("Promotions")}
            onChange={handlePreferenceCheckbox}
          />
        </label>
      </div>
      <div className="contact-section">
        <h3>Contact Method</h3>
        <p className="description">
          Let us know how you would like us to reach you.
        </p>
        <div className="contact-method">
          <label htmlFor="email">
            Receive updates and offers via email.
            <input
              type="checkbox"
              id="email"
              value="Email"
              checked={stepThreeFormData.contactMethod.includes("Email")}
              onChange={handleContactCheckbox}
            />
          </label>
          <label htmlFor="phone">
            Receive important calls or notifications.
            <input
              type="checkbox"
              id="phone"
              value="Phone"
              checked={stepThreeFormData.contactMethod.includes("Phone")}
              onChange={handleContactCheckbox}
            />
          </label>
          <label htmlFor="sms">
            Get short text messages with updates and promotions.
            <input
              type="checkbox"
              id="sms"
              value="SMS"
              checked={stepThreeFormData.contactMethod.includes("SMS")}
              onChange={handleContactCheckbox}
            />
          </label>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}
