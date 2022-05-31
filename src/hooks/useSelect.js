import React, { useState } from "react";




const useSelect = (stateInicial, opciones) => {



  //state de custom hooks
  const [state, actualizarState] = useState("general");



  const SelectNoticias = () => (

    <select
      className="browser-default"
      value={state}
      onChange={(e) => actualizarState(e.target.value)}
    >

      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>

      ))}
    </select>
  );



  return [state, SelectNoticias];
};

export default useSelect;
