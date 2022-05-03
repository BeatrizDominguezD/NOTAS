import { useState } from "react";

function App() {

//hooks : Funciones especificas de react todos comienzan con la palabra "use"

  const [inputState,setInputState] = useState  ({
    titulo: "",
    fecha: "",
    nota: "",
  }); //VALOR INICIAL DEL STATE

  const handleInputChange = (event) => { 
      setInputState({
        ...inputState,
        [event.target.name]: event.target.value,
    });
  };

  const handleInputClean = ( ) => {
    setInputState ({
      titulo: " ", 
      fecha: " ", 
      nota: " "
    });
  };

let arregloNotas = JSON.parse (localStorage.getItem ("notas")) || [];

  const handleClickGuardar = ( ) => {
    let arregloNotas = JSON.parse (localStorage.getItem ("notas")) || [];
    arregloNotas.push (inputState)
    localStorage.setItem ("notas",JSON.stringify (arregloNotas));
    handleInputClean();
  };
    
  return (

    <div className="App container">
      <div className="row">
       <div className= "col">
          <h3> LISTAS </h3>
          {arregloNotas.length === 0 && 
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo"}
          
          {arregloNotas.length !== 0 && (
            <ol>
              {arregloNotas.map((item) => {
                return (
                  <li>
                    {item.titulo}({item.fecha})
                    <i 
                      class="bi bi-x-circle-fill"
                      style = {{ color: "red", fontSize: "0.75rem"}}></i>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
        <div className="col">
        <h3> NOTAS </h3>
        <label className = 'mb-2' style={{width:"100%"}} > 

        TITULO 

        <input
          id = "titulo" 
          name = "titulo" 
          type = "text"
          onChange = {handleInputChange}
          value = {inputState.titulo}
          style = {{ width: "100%"}}
        />
      </label>
      <br />

    <label className = "mb-2"
    style = {{ width: "100%"}}>
      FECHA
        <input 
          id ="fecha" 
          name="fecha" 
          type="text"
          onChange={handleInputChange}
          value={inputState.fecha}
          style = {{ width: "100%"}}
          />
    </label>
    <br />

    <label className = "mb-2" 
    style = {{ width: "100%"}}>
      NOTA
        <input 
          id ="nota" 
          name="nota" 
          type="text"
          onChange={handleInputChange}
          value={inputState.nota}
          style = {{ width: "100%"}}
          />
    </label>
    <hr />
      <div className = "mt-2 me-2 mt-2 row">
        <div className = "col">
        <span className="row me-1">
          <button 
            type = "button" 
            className ="btn btn-primary"
            onClick={handleInputClean}
        >
            LIMPIAR
          </button>
        </span>
      </div>
      <div className = "col">
        <span className = "row ms-1">
          <button 
            type="button" 
            className="btn btn primary"
            onClick={handleClickGuardar}>

          GUARDAR
              </button>
              </span>
            </div>   
          </div>
        </div>
      </div>
    </div>     
    );
  }
  export default App;
