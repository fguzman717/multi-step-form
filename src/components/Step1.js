export default function Step1({
  stepOneFormData,
  setStepOneFormData,
  nextStep,
}) {
  const handleChange = (event) => {
    setStepOneFormData({
      ...stepOneFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-step">
      <h2>Step 1: Personal Information</h2>
      <div className="name-container">
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            maxLength="20"
            placeholder="First Name"
            value={stepOneFormData.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="middleName">
          Middle Name
          <input
            type="text"
            name="middleName"
            id="middleName"
            maxLength="20"
            placeholder="Middle Name"
            value={stepOneFormData.middleName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            maxLength="20"
            placeholder="Last Name"
            value={stepOneFormData.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="demographic-container">
        <label htmlFor="dob">
          Date of Birth
          <input
            type="date"
            id="dob"
            name="dob"
            value={stepOneFormData.dob}
            min="1900-01-01"
            max={
              new Date(new Date().getFullYear() - 18, 0, 1)
                .toISOString()
                .split("T")[0]
            }
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gender">
          Gender
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="">----Please Select----</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="I prefer not to say">I prefer not to say</option>
          </select>
        </label>
      </div>
      <div className="contact-container">
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            name="email"
            id="email"
            maxLength="30"
            placeholder="Email Address"
            value={stepOneFormData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input
            type="tel"
            name="phone"
            id="phone"
            maxLength="10"
            placeholder="Phone Number"
            value={stepOneFormData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}
