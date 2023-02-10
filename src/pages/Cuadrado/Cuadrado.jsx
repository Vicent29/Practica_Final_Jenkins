import React, { useState } from "react";
import "../../components/Home/home.css";
const AreaCuadrado = require("../../test/CalcCuadrado")

function TriangleAreaCalculator() {
  const [ladoA, setBaseA] = useState("");
  const [ladoB, setBaseB] = useState("");
  const [area, setArea] = useState(null);

  const formSubmitTri = (e) => {
    e.preventDefault();
    setArea(AreaCuadrado(ladoA,ladoB));
  };

  return (
    <>
      <div className="style_plig">
        <h2>Calcuar área del Cuadrado:</h2>
    
        <form className="cart" onSubmit={formSubmitTri}>
          <div className="form-group">
            <label for="exampleInputEmail1">LadoA del cuadraado:</label>
            <input type="number" className="form-control" value={ladoA} onChange={(e) => setBaseA(e.target.value)}/>
          </div>
          <div className="form-group mt-3">
            <label for="exampleInputPassword1">LadoB del cuadraado:</label>
            <input type="number" className="form-control" value={ladoB} onChange={(e) => setBaseB(e.target.value)}
              />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Calcular Área</button>
        </form>
        {area !== null &&
        <div class="square">
            <p>{area}</p>
        </div>
        }
      </div>
    </>
  );
}

export default TriangleAreaCalculator;