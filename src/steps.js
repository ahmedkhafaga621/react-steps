import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  function handleNext() {
    if (step < messages.length) {
      setStep((step) => step + 1);
    }
  }
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  function handleRemove() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <>
      <button className="close" onClick={handleRemove}>
        {show ? "Hide component" : "Show component"}
      </button>
      {show && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
