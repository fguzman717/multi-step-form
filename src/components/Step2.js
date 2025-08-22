export default function Step2({
  stepTwoFormData,
  setStepTwoFormData,
  nextStep,
  prevStep,
}) {
  const handleChange = (event) => {
    setStepTwoFormData({
      ...stepTwoFormData,
      [event.target.name]: event.target.value,
    });
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <div className="form-step">
      <h2>Step 2: Address Information</h2>
      <label htmlFor="streetAddress">
        Street Address
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          maxLength="50"
          placeholder="Street Address"
          value={stepTwoFormData.streetAddress}
          onChange={handleChange}
        />
      </label>
      <div className="address-grid">
        <div>
          <label htmlFor="city">
            City
            <input
              type="text"
              id="city"
              name="city"
              maxLength="20"
              placeholder="City"
              value={stepTwoFormData.city}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="state">
            State
            <select
              name="state"
              id="state"
              value={stepTwoFormData.state}
              onChange={handleChange}
            >
              <option value="">----Select State----</option>
              {states.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="zip">
            ZIP Code
            <input
              type="text"
              id="zip"
              name="zip"
              maxLength="10"
              placeholder="ZIP Code"
              value={stepTwoFormData.zip}
              onChange={handleChange}
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
