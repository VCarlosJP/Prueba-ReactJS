import React, { useState, useEffect } from "react";

import "./styles/HomeComponent.scss";
import "./styles/MeasurementComponent.scss";

import MeasurementsForm from "./FormComponent";
import MeasurementsTable from "./MeasurementComponent";
import { fetchHomeData } from "../services/Measurements/FetchMeasurements.js";

function HomeComponent(props) {
  /**
   * measurements contendra todas las mediciones traidas de la base de datos
   * displayVariedades y displayTipos contendran la información respectiva para cagar los select boxes del formulario
   */
  const [measurements, setMeasurements] = React.useState([]);
  const [displayVariedades, setDisplayVariedades] = useState([]);
  const [displayTipos, setDisplayTipos] = useState([]);

  // Realizamos las peticioens correspondientes para llenar nuestros estados e injectarlos a los componentes hijos (MeasurementsForm/MeasurementsTable)
  useEffect(() => {
    fetchHomeData("measurements", setMeasurements);
    fetchHomeData("variedades_vino", setDisplayVariedades);
    fetchHomeData("tipos_vino", setDisplayTipos);
  }, []);

  // handleNewMeasurement permite hacer un fetch cuando hay un cambio en el componente hijo (MeasurementsForm)
  function handleNewMeasurement() {
    fetchHomeData("measurements", setMeasurements);
  }

  return (
    <div>
      <div className="logout-container">
        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("test_token");
            props.history.push("/login");
          }}
        >
          Log Out
        </button>
      </div>
      <div className="home-container">
        <MeasurementsForm
          tipos={displayTipos}
          variedades={displayVariedades}
          onChange={handleNewMeasurement}
        />
        <MeasurementsTable measurements={measurements} />
      </div>
    </div>
  );
}

export default HomeComponent;
