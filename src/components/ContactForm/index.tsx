"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import ContactCard from "../ContactCard";
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  text: "",
};

const FormComponent = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción necesaria con los datos del formulario, como enviarlos a un servidor
    console.log(formData);

    fetch("/api", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(formData),
    });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Correo:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Teléfono :
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Mensaje:
          <textarea
            className={style.textArea}
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button className={style.btn} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default FormComponent;
