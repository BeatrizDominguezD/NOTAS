
function App() {
   let varPrueba = "Titulo"
  const handleChangePrueba = (event) => {  
    varPrueba=event.target.name;
  }
  return (

    <div className="App">

        <h3>pato tieso</h3>

        <label htmlFor="PruebaID">Input de prueba</label>

      <input 
      id ="pruebaID" 
      name="Prueba" 
      type="text"
      onChange={handleChangePrueba}
      value={varPrueba}
      />
    </div>
  );
}

export default App;
