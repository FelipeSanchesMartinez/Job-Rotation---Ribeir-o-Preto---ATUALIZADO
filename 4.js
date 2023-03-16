/* Em uma hora, o carro percorre 110 km, enquanto o caminhão percorre 80 km (levando em conta o tempo adicional dos pedágios). Assim, 
podemos calcular o tempo necessário para cada veículo percorrer a distância até o ponto de encontro:

Tempo do carro = 100 km / 110 km/h = 0,909 horas = 54,54 minutos
Tempo do caminhão = 100 km / 80 km/h = 1,25 horas = 75 minutos + 10 minutos (pedágios) = 85 minutos

Portanto, o carro estará mais próximo da cidade de Ribeirão Preto quando se cruzarem na rodovia, já que ele terá 
percorrido uma distância menor em relação ao caminhão. O caminhão terá percorrido uma distância maior até o ponto de encontro devido ao 
tempo adicional dos pedágios. */

const distancia = 100; //  km
const velocidadeCarro = 110; // km/h
const velocidadeCaminhao = 80; // km/h
const tempoPedagios = 10; //minutos


const distanciaCarro = distancia;
const distanciaCaminhao = distancia;


const tempoCarro = distanciaCarro / velocidadeCarro * 60; // minutos
const tempoCaminhao = distanciaCaminhao / velocidadeCaminhao * 60 + tempoPedagios; // minutos


if (tempoCarro < tempoCaminhao) {
  console.log("O carro estará mais próximo da cidade de Ribeirão Preto.");
} else {
  console.log("O caminhão estará mais próximo da cidade de Ribeirão Preto.");
}
