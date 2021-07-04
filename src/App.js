import { useState, useReducer } from "react";
import PhonebookForm from "./components/PhonebookForm";
import PhoneBookList from "./components/PhoneBookList";

import "./App.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      firstname: "",
      lastname: "",
      phonenumber: "",
    };
  }
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const phoneBook = [
  {
    firstname: "charles",
    lastname: "ogunda",
    phonenumber: '07037773737'
  },
  {
    firstname: "angela",
    lastname: "okeke",
    phonenumber: '07055553838'
  },
];

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    phoneBook.push(formData);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);

    console.log(phoneBook);
  };

  return (
    <div>
      <h1>React PhoneBook</h1>
      {isSubmitting && <div>Submitting form please wait a minute</div>}
      <PhonebookForm
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        isSubmitting={isSubmitting}
      />
      <PhoneBookList phoneBook={phoneBook} />
    </div>
  );
}

export default App;
