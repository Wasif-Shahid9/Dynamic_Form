import React, { useEffect, useState } from "react";

const EducationForm = ({
  index,
  setFormFields,
  formFields,
  deleteFields,
  formSubmitted,
  errorMessage,
  data,
}) => {
  // console.log("education..........", formSubmitted);
  const handleChange = (e) => {
    console.log(
      index,
      e.target.education,
      e.target.university,
      e.target.completionYear
    );
    console.log("Education Form", index, e.target.name, e.target.value);
    const data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };
  // console.log(index);

  // const validateForm = () => {

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter Education"
        onChange={handleChange}
        name="education"
        value={formFields[index].education}
      />

      {formSubmitted && !data.education && (
        <p className="error-message">{errorMessage[index]?.education}</p>
      )}
      <input
        type="text"
        placeholder="Enter University"
        onChange={handleChange}
        name="university"
        value={formFields[index].university}
      />
      {formSubmitted && !data.university && (
        <p className="error-message">{errorMessage[index]?.university}</p>
      )}

      <input
        type="text"
        placeholder="Enter Completion Year"
        onChange={handleChange}
        name="completionYear"
        value={formFields[index].completionYear}
      />
      {formSubmitted && !data.completionYear && (
        <p className="error-message">{errorMessage[index]?.completionYear}</p>
      )}

      <button onClick={() => deleteFields(index)}>Delete</button>
    </div>
  );
};

export default EducationForm;
