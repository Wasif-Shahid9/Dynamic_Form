import { useState } from "react";
import "./App.css";
import LanguagesForm from "./components/LanguagesForm";
import EducationForm from "./components/EducationForm";

const RenderForm = ({
  type,
  index,
  data,
  setFormFields,
  formFields,
  handleFormChange,
  deleteFields,
  formSubmitted,
  errorMessage,
}) => {
  // console.log(errorMessage);
  switch (type) {
    case "INFO":
      // console.log(errorMessage[index], index);
      return (
        <div key={index} className="form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => handleFormChange(e, index)}
            value={data.name}
          />
          {formSubmitted && !data.name && (
            <p className="error-message">{errorMessage[index]?.name}</p>
          )}
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleFormChange(e, index)}
            value={data.emial}
          />
          {formSubmitted && !data.email && (
            <p className="error-message">{errorMessage[index]?.email}</p>
          )}
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={(e) => handleFormChange(e, index)}
            value={data.age}
          />
          {formSubmitted && !data.age && (
            <p className="error-message">{errorMessage[index]?.age}</p>
          )}
          <br />
          <button onClick={() => deleteFields(index)}>Delete</button>
        </div>
      );

    case "EDUCATION":
      return (
        <EducationForm
          data={data}
          key={index}
          index={index}
          setFormFields={setFormFields}
          formFields={formFields}
          deleteFields={deleteFields}
          formSubmitted={formSubmitted}
          errorMessage={errorMessage}
        />
      );

    case "LANGUAGE":
      return (
        <LanguagesForm
          key={index}
          index={index}
          setFormFields={setFormFields}
          formFields={formFields}
          deleteFields={deleteFields}
          data={data}
          formSubmitted={formSubmitted}
          errorMessage={errorMessage}
        />
      );

    default:
      // console.log("Type", type);
      return null;
  }
};

function App() {
  const [errorMessage, setErrorMessage] = useState([
    {
      name: "Please enter your name",
      email: "Please enter your email",
      age: "Please enter your age",
    },
  ]);
  const [typeSelect, setTypeSelect] = useState("INFO");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState([
    {
      name: "",
      email: "",
      age: "",
      formType: "INFO",
    },
  ]);

  const handleFormChange = (e, index) => {
    // console.log( index, e.target.name, e.target.value);
    const data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };

  const handleAddFields = () => {
    // getting this from the select
    const type = "EDUCATION";
    let object;
    // console.log(typeSelect);
    switch (typeSelect) {
      case "EDUCATION":
        // console.log("education case");
        object = {
          education: "",
          university: "",
          completionYear: "",
          formType: "EDUCATION",
        };
        break;

      case "LANGUAGE":
        // console.log("language case");
        object = {
          frontend: "",
          backend: "",
          formType: "LANGUAGE",
        };
        break;
      default:
        // console.log("default case");
        object = {
          name: "",
          email: "",
          age: "",
          formType: "INFO",
        };
        break;
    }
    // console.log([...formFields, object]);
    setFormFields([...formFields, object]);
  };

  // const deleteFields = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1);

  //   setFormFields(data);
  // };
  const deleteFields = (index) => {
    const updatedFormFields = formFields.filter((element, i) => i !== index);
    setFormFields(updatedFormFields);
  };

  /////////////////////////// Error Handling

  const validateForm = () => {
    // console.log(formFields);
    // let errors = [];
    console.log("formfields: ", formFields);
    console.log("error message: ", errorMessage);
    for (const [index, data] of Object.entries(formFields)) {
      console.log(index, " formType: ", data.formType);
      // console.log(data);
      switch (data.formType) {
        case "INFO":
          if (!data.name || !data.email || !data.age) {
            if (formFields.length === errorMessage.length) {
              break;
            } else {
              console.log("info else");
              setErrorMessage([
                ...errorMessage,
                {
                  name: "Please enter your name",
                  email: "Please enter your email",
                  age: "Please enter your age",
                },
              ]);
            }

            // errors.push({
            //   name: "Please enter your name",
            //   email: "Please enter your email",
            //   age: "Please enter your age",
            // });
          }
          break;
        case "EDUCATION":
          if (!data.education || !data.university || !data.completionYear) {
            if (formFields.length === errorMessage.length) {
              break;
            } else {
              console.log("education else");
              setErrorMessage([
                ...errorMessage,
                {
                  education: "Please enter your education",
                  university: "Please enter your university",
                  completionYear: "Please enter completion year",
                },
              ]);
            }
          }
          break;
        case "LANGUAGE":
          if (!data.frontend || !data.backend) {
            if (formFields.length === errorMessage.length) {
              break;
            } else {
              setErrorMessage([
                ...errorMessage,
                {
                  frontend: "Please enter your frontend",
                  backend: "Please enter your backend",
                },
              ]);
            }
          }
        default:
      }
    }

    if (errorMessage.length > 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    if (validateForm()) {
      // console.log("Form data:", formFields);
    } else {
      // alert("Plz Fill All the Fields");
      // console.log("Not submitted");
    }
  };

  return (
    <>
      <div className="app">
        {formFields.map((data, index) => {
          return (
            <RenderForm
              data={data}
              index={index}
              type={data.formType}
              key={index}
              setFormFields={setFormFields}
              formFields={formFields}
              handleFormChange={handleFormChange}
              deleteFields={deleteFields}
              formSubmitted={formSubmitted}
              errorMessage={errorMessage}
            />
          );
        })}

        <select
          className="select"
          name="typeSelect"
          onChange={(event) => setTypeSelect(event.target.value)}
          defaultValue={typeSelect}
        >
          <option value="EDUCATION">Education</option>
          <option value="INFO">Info</option>
          <option value="LANGUAGE">Language</option>
        </select>
        <button onClick={handleAddFields} className="add__btn">
          Add More
        </button>

        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </>
  );
}

export default App;
