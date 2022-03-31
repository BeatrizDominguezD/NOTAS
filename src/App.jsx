import { useState } from "react";

function App() {

  //hooks : Funciones especificas de react todos comienzan con la palabra "use"

  const [inputState,setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  }); //VALOR INICIAL DEL STATE

  const handleInputChange = (event) => { 
    //console.log(event.target);
      setInputState({

        ...inputState,
        [event.target.name]: event.target.value,
    
    });
    
  };

  return (

    <div className="App">

        <h3>pato tieso</h3>

        <label htmlFor="titulo"> TITULO UWU </label>

      <input 
      id ="titulo" 
      name="titulo" 
      type="text"
      onChange={handleInputChange}
      value={inputState.titulo}
      />
      
      

      <label htmlFor="fecha"> FECHA </label>

      <input 
      id ="fecha" 
      name="fecha" 
      type="text"
      onChange={handleInputChange}
      value={inputState.fecha}

      /><label htmlFor="nota"> NOTA </label>

      <input 
      id ="nota" 
      name="nota" 
      type="text"
      onChange={handleInputChange}
      value={inputState.nota}
      />
    </div>
  );
}

export default App;
