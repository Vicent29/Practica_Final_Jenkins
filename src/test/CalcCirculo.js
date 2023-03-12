function calcArea(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  area = Math.round(area * 100) / 100;
  return area;
}
module.exports = calcArea;
