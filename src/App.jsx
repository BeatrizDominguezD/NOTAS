import { useState } from "react";

function App() {

//hooks : Funciones especificas de react todos comienzan con la palabra "use"

  const [inputState,setInputState] = useState  ({
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

  const handleResetClick = ( ) => {
    setInputState ({titulo: " ", fecha: " ", nota: " "});
  };
    
  return (

    <div className="App container">
      <div className="row">
       <div className= "col">
          <h3> LISTAS </h3>
        </div>
        <div className="col">
          <h3> NOTAS </h3>
        <label className = 'mb-2' > 

        TITULO 

        <input
          id ="titulo" 
          name="titulo" 
          type="text"
          onChange={handleInputChange}
          value={inputState.titulo}
        />
      <br />
      </label>

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
      </div>
      <hr />
      <div className=" ms-2 mt-2">
      <button 
      type = "button" 
      className ="btn btn-primary"
      onClick={handleResetClick}
      style= {{marginLeft: "5px"}}
      >
        RESET
      
      </button>

    </div>
    </div>

  );
}

export default App;
