import { useState } from "react";

function TCTForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [region, setRegion] = useState('');
  const [comment, setComment] = useState('');
  const [accept, setAccept] = useState(false);

  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState("success");

  function FormSubmit() {
    if (!accept) {
      setType("error");
      setMessage("Please accept the terms before submitting.");
      setShowAlert(true);
      return;
    }

    setType("success");
    setMessage(`
Name: ${name}
Gender: ${gender}
Region: ${region}
Comment: ${comment}
    `);
    setShowAlert(true);
  }

  return (
    <div className="page">
      <div className="form-container">
        <h1>TCT Form</h1>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="rdGender"
                value="Male"
                onChange={e => setGender(e.target.value)}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="rdGender"
                value="Female"
                onChange={e => setGender(e.target.value)}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="rdGender"
                value="N/A"
                onChange={e => setGender(e.target.value)}
              /> N/A
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Region</label>
          <select onChange={e => setRegion(e.target.value)}>
            <option value="">-- select your region --</option>
            <option value="North">North</option>
            <option value="North East">North East</option>
            <option value="Central">Central</option>
            <option value="South">South</option>
          </select>
        </div>

        <div className="form-group">
          <label>Comment</label>
          <textarea
            rows="4"
            onChange={e => setComment(e.target.value)}
          />
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              onChange={e => setAccept(e.target.checked)}
            />
            I accept the terms
          </label>
        </div>

        <button className="submit-btn" onClick={FormSubmit}>
          Send
        </button>
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="alert-overlay">
          <div className={`alert-box ${type}`}>
            <div className="alert-icon">
              {type === "success" ? "✓" : "!"}
            </div>
            <pre className="alert-text">{message}</pre>
            <button onClick={() => setShowAlert(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TCTForm;
