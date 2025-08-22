export default function Review({ fullFormData, prevStep }) {
  const handleSubmit = () => {
    alert("Form Submitted!");
    console.log(fullFormData);
  };

  return (
    <div className="form-step">
      <h2>Review Your Info</h2>
      <p className="description">
        Please take a moment to review your information.
      </p>
      <div className="review-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="review-item">
          <span className="review-label">First Name:</span>
          <span className="review-value">{fullFormData.firstName}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Middle Name:</span>
          <span className="review-value">{fullFormData.middleName}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Last Name:</span>
          <span className="review-value">{fullFormData.lastName}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Date of Birth:</span>
          <span className="review-value">{fullFormData.dob}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Email:</span>
          <span className="review-value">{fullFormData.email}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Phone:</span>
          <span className="review-value">{fullFormData.phone}</span>
        </div>
      </div>

      <div className="review-section">
        <h3 className="section-title">Address Information</h3>
        <div className="review-item">
          <span className="review-label">Street:</span>
          <span className="review-value">{fullFormData.streetAddress}</span>
        </div>
        <div className="review-item">
          <span className="review-label">City:</span>
          <span className="review-value">{fullFormData.city}</span>
        </div>
        <div className="review-item">
          <span className="review-label">State:</span>
          <span className="review-value">{fullFormData.state}</span>
        </div>
        <div className="review-item">
          <span className="review-label">ZIP Code:</span>
          <span className="review-value">{fullFormData.zip}</span>
        </div>
      </div>

      <div className="review-section">
        <h3 className="section-title">Preferences & Contact Options</h3>
        <p className="review-value">
          {" "}
          {fullFormData.preferences.length === 0
            ? "You have not agreed to receive any communications."
            : fullFormData.preferences.length === 1
            ? `You have agreed to receive our ${fullFormData.preferences[0].toLowerCase()}.`
            : `You have agreed to receive our ${fullFormData.preferences[0].toLowerCase()} and ${fullFormData.preferences[1].toLowerCase()}.`}
        </p>
      </div>

      <div className="navigation-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
