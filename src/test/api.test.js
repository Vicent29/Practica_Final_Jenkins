const CalcTriangulo = require("./CalcTriangulo")
const CalcCirculo = require("./CalcCirculo")
const CalcCuadrado = require("./CalcCuadrado")

test("Test para calcular area de los poligonos", () => {
  expect(CalcTriangulo(2, 3)).toBe(3);
  expect(CalcCirculo(4)).toBe(50.26548245743669);
  expect(CalcCuadrado(2, 3)).toBe(6);
});
