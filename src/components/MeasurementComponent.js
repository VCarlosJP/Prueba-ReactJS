import React, { useState, useEffect } from "react";

function MeasurementComponent(props) {
  return (
    /**
     * Este componente recibe measurements como props y se encarga de renderizarlas dentro de una tabla.
     * Para varidad y tipo, se especifica la propiedad ['nombre'] ya que las propiedades variedad/tipo
     * cuentan con un objeto como valor el cual se compone de {id:'', nombre:''}
     */
    <div className="measurements-table-container">
      <table>
        <tr>
          <th>Año</th>
          <th>Color</th>
          <th>Temp.</th>
          <th>Grad.</th>
          <th>PH</th>
          <th>Variedad</th>
          <th>Tipo</th>
          <th>Observaciones</th>
        </tr>
        {props.measurements.map((measurement, index) => (
          <tr key={index}>
            <td>{measurement.ano}</td>
            <td>{measurement.color}</td>
            <td>{measurement.temperatura}</td>
            <td>{measurement.graduacion}</td>
            <td>{measurement.ph}</td>
            <td>{measurement.variedad["nombre"]}</td>
            <td>{measurement.tipo["nombre"]}</td>
            <td>{measurement.observaciones}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default MeasurementComponent;
