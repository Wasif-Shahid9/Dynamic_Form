import React from "react";

const LanguagesForm = ({
  index,
  setFormFields,
  formFields,
  deleteFields,
  data,
  formSubmitted,
  errorMessage,
}) => {
  const handleChange = (e) => {
    // const updatedForm = { ...form, [e.target.name]: e.target.value };
    console.log("Achiements", index, e.target.name, e.target.value);
    const data = [...formFields];
    data[index][e.target.name] = e.target.value;
    console.log(data);
    setFormFields(data);
  };
  console.log(index);
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter Fronend"
        onChange={handleChange}
        name="frontend"
        value={formFields[index].frontend}
      />
      {formSubmitted && !data.frontend && (
        <p className="error-message">{errorMessage[index]?.frontend}</p>
      )}
      <input
        type="text"
        placeholder="Enter Backend"
        onChange={handleChange}
        name="backend"
        value={formFields[index].backend}
      />
      {formSubmitted && !data.backend && (
        <p className="error-message">{errorMessage[index]?.backend}</p>
      )}
      <button onClick={() => deleteFields(index)}>Delete</button>
    </div>
  );
};

export default LanguagesForm;
