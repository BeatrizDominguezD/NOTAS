import { useState } from "react";

function App() {

//hooks : Funciones especificas de react todos comienzan con la palabra "use"

  const [inputState,setInputState] = useState  ({
    titulo: "",
    fecha: "",
    nota: "",
  }); //VALOR INICIAL DEL STATE

  const initialState = JSON.parse (localStorage.getItem ("notas")) || [];
  const [notas, setNotas] = useState (initialState);

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

  const handleClickGuardar = ( ) => {
    setNotas([...notas, inputState])
    localStorage.setItem ("notas",JSON.stringify (notas));
    handleInputClean();
  };

  const handleBorrarNota = (index) => {
    const nuevoArreglo = []
    
    notas.forEach ((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push (nota)
      }
    });

    localStorage.setItem ("notas", JSON.stringify (nuevoArreglo))
    setNotas ([...nuevoArreglo])
  };

  const handleClickLimpiaLista = () => {
    setNotas ([])
      localStorage.setItem ("notas", JSON.stringify ([]));
  };

  const handleClickNota = (index) => {
    setInputState ({...notas [index]});
  };
    
  return (

    <div className="App container">
      <div className="row">
        <div className= "col">
          <h3> LISTAS </h3>
          {notas.length === 0 && 
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo"}
          
          {notas.length !== 0 && (
            <ol>
              {notas.map((item, index) => {
                return (
                  <li key = {index} onClick = {() => handleClickNota (index)}>
                    {item.titulo}({item.fecha}) &nbsp;
                    <i 
                      className = "bi bi-x-circle-fill"
                      onClick = {() => handleBorrarNota (index)}
                      style = {{
                        color: "red",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                      }} 
                      ></i>
                  </li>
                );
              })}
            </ol>
          )}
          <button 
            type = "button"
            className = "btn btn-primary"
            onClick = {handleClickLimpiaLista}
            disabled={notas.length === 0}
            > 
            Limpia lista
            </button>
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
          type="date"
          onChange={handleInputChange}
          value={inputState.fecha}
          style = {{ width: "100%"}}
          />
    </label>
    <br />

    <label className = "mb-2" 
    style = {{ width: "100%"}}>
      NOTA
        <textarea 
          id ="nota" 
          name="nota" 
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
            onClick={handleClickGuardar}
            disabled={
            inputState.titulo==="" ||
            inputState.fecha ==="" ||
            inputState.nota ===""}
          >
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
