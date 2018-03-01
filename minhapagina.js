window.onload = function () {
  var mapa = L.map('meumapa').setView([-25.45, -49.27], 11);

  //L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

  L.tileLayer(
"https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
{
id: "mapbox.pirates",
accessToken: "pk.eyJ1IjoidmljdG9yLW1lZGluYSIsImEiOiJjamYyc3d3ZzYwdWpsMnFsbnQ0ejNlY2xzIn0.o9yHxibPnXZ1PLqjlWY3pA"
}
).addTo(mapa);

  var ponto = L.marker(([-25.45,-49.27])).addTo(mapa);


//Linha
var linha = L.polyline([
[-25.4, -49.2],
[-25.5, -49.1]
]).addTo(mapa);

//Círculo
var circulo = L.circle(
[-25.45, -49.35],
{
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5000
}
).addTo(mapa);
//Polígono
var poligono = L.polygon([
[-25.5, -49.3],
[-25.5, -49.5],
[-25.6, -49.3]
],
{
color: "#00ff00",
fillColor: "#000",
fillOpacity: 0.5
}
).addTo(mapa);
//Anexar popups
ponto.bindPopup("Eu sou um ponto!");
linha.bindPopup("Eu sou uma linha!");
poligono.bindPopup("Eu sou um polígono!");
circulo.bindPopup("Eu sou um círculo");

//Evento disparado após o clique do usuário
mapa.on("click", function (evento) {
alert("Você clicou em: " + evento.latlng);
});

//Adicionar camada WMS ao mapa
L.tileLayer.wms('http://localhost:8082/geoserver/wms', {
layers: "	GRR20144617:teresopolis",
transparent: "true",
format: "image/png"
}).addTo(mapa);


}
