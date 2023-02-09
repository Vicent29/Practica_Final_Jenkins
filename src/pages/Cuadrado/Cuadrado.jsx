import React, { useState } from "react";
import "../../components/Home/home.css";
const AreaTriangulo = require("../../test/CalcTriangulo")

function TriangleAreaCalculator() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);

  const formSubmitTri = (e) => {
    e.preventDefault();
    setArea(AreaTriangulo(base,height));
  };

  return (
    <>
      <div className="style_plig">
        <h2>Calcuar área del Cuadrado:</h2>
    
        <form className="cart" onSubmit={formSubmitTri}>
          <div className="form-group">
            <label for="exampleInputEmail1">Base de triangulo:</label>
            <input type="number" className="form-control" value={base} onChange={(e) => setBase(e.target.value)}/>
          </div>
          <div className="form-group mt-3">
            <label for="exampleInputPassword1">Altura de triangulo:</label>
            <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)}
              />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Calcular Área</button>
        </form>
        {area !== null &&
        <div class="triangle">
            <p>{area}</p>
        </div>
        }
      </div>
    </>
  );
}

export default TriangleAreaCalculator;