'use client';
import Form from "dimi/components/form";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <Form submit={handleSubmit} />
      ) : (
        <h1>Thank you for your submission!</h1>
      )}
    </div>
  );
}

export default App;