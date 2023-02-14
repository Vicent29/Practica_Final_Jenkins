
import React, { useState } from "react";
import "../../components/Home/home.css";
const AreaCirculo = require("../../test/CalcCirculo")

function TriangleAreaCalculator() {
  const [radio, setRadio] = useState("");
  const [area, setArea] = useState(null);

  const formSubmitTri = (e) => {
    e.preventDefault();
    setArea(AreaCirculo(radio));
  };

  return (
    <>
      <div className="style_plig">
        <h2>Calcuar área del Circulo</h2>
    
        <form className="cart" onSubmit={formSubmitTri}>
          <div className="form-group">
            <label for="exampleInputEmail1">Radio del circulo:</label>
            <input type="number" className="form-control" value={radio} onChange={(e) => setRadio(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Calcular Área</button>
        </form>
        {area !== null &&
        <div class="circle">
            <p>{area}</p>
        </div>
        }
      </div>
    </>
  );
}


export default TriangleAreaCalculator;