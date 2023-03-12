import { Link } from "react-router-dom";
import "./home.css";

export default function HomeComponent() {

  return (
    <>
      <div className="home_style">
            <h2>Proyecto Jenkins con React:</h2><br /><br /><br />
            <p>
            Este proyecto consta de una aplicación web desarrollada con React, la
            cual permite calcular el área de diferentes tipos de polígonos, como
            triángulos, cuadriláteros y círculos. La interfaz de usuario
            proporciona una forma intuitiva y sencilla de ingresar las medidas
            requeridas para cada tipo de polígono y el resultado del cálculo es
            presentado en una sección separada. Además, el código está escrito de
            manera modular y escalable, permitiendo una fácil integración de
            nuevos tipos de polígonos en el futuro. En resumen, esta aplicación es
            una herramienta útil y eficiente para cualquier persona que necesite
            calcular el área de polígonos de manera rápida y precisa.
            </p>
            <div className="btns">
                <Link to="/triangulo">
                    <button type="button" className="btn btn-outline-warning m-2">Triangulo</button>
                </Link>
                <Link to="/cuadrado">
                    <button type="button" className="btn btn-outline-success m-2">Cuadrado</button> 
                </Link>
                <Link to="/circulo">
                    <button type="button" className="btn btn-outline-info m-2">Circulo</button> 
                </Link>
            </div>
      </div>
    </>
  );
}
