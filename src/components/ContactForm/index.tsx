"use client";
import React, { useEffect, useState } from "react";
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
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const nameRegex = /^[a-zA-Z\s]{2,50}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /^[\d()+-]{7,15}$/;
      const textMaxLength = 500;

      if (!nameRegex.test(formData.name)) {
        throw new Error("El nombre no cumple con las restricciones.");
      }

      if (!emailRegex.test(formData.email)) {
        throw new Error(
          "El correo electrónico no cumple con las restricciones."
        );
      }

      if (!phoneRegex.test(formData.phone)) {
        throw new Error("El teléfono no cumple con las restricciones.");
      }

      if (formData.text.length > textMaxLength) {
        throw new Error("El texto excede el límite de longitud permitido.");
      }

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSend(true);
        setFormData(initialFormData);
      } else {
        throw new Error("Error al enviar los datos.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 6000);
    }
  }, [error]);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        setIsSend(false);
      }, 6000);
    }
  }, [isSend]);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.messageGood + " " + (isSend ? style.active : "")}>
        <h2>Enviado Correctamente</h2>
      </div>
      <div className={style.messageBad + " " + (error ? style.active : "")}>
        <h2>Error al enviar</h2>
        <p>{error}</p>
      </div>
      <div>
        <label>
          Nombre:
          <input
            required
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
            required
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
            required
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
            required
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
