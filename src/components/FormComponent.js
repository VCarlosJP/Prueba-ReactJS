import React, { useState, useEffect } from "react";
import { postMeasurement } from "../services/Measurements/postMeasurement.js";

function FormComponent(props) {
  const [ano, setano] = useState("");
  const [color, setColor] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [graduacion, setGraduacion] = useState("");
  const [ph, setPh] = useState("");
  const [variedad, setVariedad] = useState("");
  const [tipo, setTipo] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // El objeto que se enviara al hacer el submit del formulario
  const dataFromForm = {
    ano: ano,
    color: color,
    temperatura: temperatura,
    graduacion: graduacion,
    ph: ph,
    variedad: variedad,
    tipo: tipo,
    observaciones: observaciones,
  };

  // Esta funcion le dira al padre cuando hacer un fetch nuevamente, para incluir la nueva measuremente en la vista
  function handleNewPost() {
    props.onChange();
  }

  //Hacemos una revision del estado de los selectboxes antes de poder ejecutar el post.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (tipo === "" || variedad === "")
      alert("Por favor, selecciona tipo/variedad");
    else postMeasurement("measurements", dataFromForm, handleNewPost);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="input-form"
              type="number"
              value={ano}
              onChange={(e) => setano(e.target.value)}
              placeholder="ano"
              required
            />
            <input
              className="input-form"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
              required
            />
            <input
              className="input-form"
              type="number"
              value={temperatura}
              onChange={(e) => setTemperatura(e.target.value)}
              placeholder="Temperatura"
              required
            />
            <input
              className="input-form"
              type="number"
              value={graduacion}
              onChange={(e) => setGraduacion(e.target.value)}
              placeholder="Graduación"
              required
            />
            <input
              className="input-form"
              type="number"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              placeholder="PH"
              required
            />
            <select
              className="select-form"
              onChange={(e) => setVariedad(e.target.value)}
              required
            >
              <option selected disabled>
                Variedad
              </option>
              {props.variedades.map((variedad, index) => (
                <option key={index} value={variedad.id}>
                  {variedad.nombre}
                </option>
              ))}
            </select>
            <select
              className="select-form"
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option selected disabled>
                Tipo
              </option>
              {props.tipos.map((tipo, index) => (
                <option key={index} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              className="observation"
              type="text"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              placeholder="Observaciones"
              required
            />
            <button className="form-button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
