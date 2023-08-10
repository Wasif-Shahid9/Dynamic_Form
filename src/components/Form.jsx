// import React, { useState } from "react";
// import EducationForm from "./EducationForm";
// import "./Form.css";

// const Form = () => {
//   //   const [addForm, setAddForm] = useState(["0"]);

//   const [form, setForm] = useState([
//     {
//       name: "",
//       email: "",
//       password: "",
//     },
//   ]);
//   const handleChange = (e) => {
//     // const updatedForm = { ...form, [e.target.name]: e.target.value };
//     const { name, value } = e.target;
//     console.log(name, value);
//     const updatedForm = [...form];
//     updatedForm[0][name] = value;
//     setForm(updatedForm);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleAddForm = () => {
//     setForm([...form, {}]);
//   };
//   return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Email"
//           name="email"
//           onChange={handleChange}
//           value={form.email}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Password"
//           name="password"
//           onChange={handleChange}
//           value={form.password}
//         />
//         <br />

//         {form.map((data, i) => {
//           if (i === 0) return null;
//           return (
//             <>
//               <EducationForm form={form} setForm={setForm} index={i} />
//             </>
//           );
//         })}
//         <button>Submit</button>
//       </form>

//       <button onClick={handleAddForm}>Add Form</button>
//     </>
//   );
// };

// export default Form;
