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
    let newContactMethods = [...stepThreeFormData.contactMethods];
    if (checked) {
      newContactMethods.push(value);
    } else {
      newContactMethods = newContactMethods.filter(
        (method) => method !== value
      );
    }
    setStepThreeFormData({
      ...stepThreeFormData,
      contactMethods: newContactMethods,
    });
  };

  return (
    <div className="form-step">
      <h2>Preferences & Contact Methods</h2>
      <div className="preferences-section">
        <h3>Preferences</h3>
        <p className="description">
          Select the types of communications you would like to receive from us.
        </p>
        <label htmlFor="newsletters">
          <input
            type="checkbox"
            id="newsletters"
            value="Newsletters"
            checked={stepThreeFormData.preferences.includes("Newsletters")}
            onChange={handlePreferenceCheckbox}
          />
          Get our monthly newsletter with the latest updates and tips!
        </label>
        <label htmlFor="promotions">
          <input
            type="checkbox"
            id="promotions"
            value="Promotions"
            checked={stepThreeFormData.preferences.includes("Promotions")}
            onChange={handlePreferenceCheckbox}
          />
          Receive special offers and promotional deals!
        </label>
      </div>
      <div className="contact-section">
        <h3>Contact Method</h3>
        <p className="description">
          Let us know how you would like us to reach you.
        </p>
        <div className="contact-method">
          <label htmlFor="email">
            <input
              type="checkbox"
              id="email"
              value="email"
              checked={stepThreeFormData.contactMethods.includes("email")}
              onChange={handleContactCheckbox}
            />
            Receive updates and offers via email.
          </label>
          <label htmlFor="phone">
            <input
              type="checkbox"
              id="phone"
              value="phone"
              checked={stepThreeFormData.contactMethods.includes("phone")}
              onChange={handleContactCheckbox}
            />
            Receive important calls or notifications.
          </label>
          <label htmlFor="sms">
            <input
              type="checkbox"
              id="sms"
              value="SMS"
              checked={stepThreeFormData.contactMethods.includes("SMS")}
              onChange={handleContactCheckbox}
            />
            Get short text messages with updates and promotions.
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
