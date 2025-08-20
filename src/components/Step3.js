export default function Step3({ formData, setFormData, nextStep, prevStep }) {
  const handleCheckbox = (event) => {
    const { checked, value } = event.target;
    let newPreferences = [...formData.preferences];
    if (checked) {
      newPreferences.push(value);
    } else {
      newPreferences = newPreferences.filter((pref) => pref != value);
    }
    setFormData({ ...formData, preferences: newPreferences });
  };

  return (
    <div className="form-step">
      <h2>Step 3: Preferences</h2>
      <label>
        <input
          type="checkbox"
          value="Newsletters"
          checked={formData.preferences.includes("Newsletters")}
          onChange={handleCheckbox}
        />
        Newsletters
      </label>
      <label>
        <input
          type="checkbox"
          value="Promotions"
          checked={formData.preferences.includes("Promotions")}
          onChange={handleCheckbox}
        />
        Promotions
      </label>
      <div className="navigation-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}
