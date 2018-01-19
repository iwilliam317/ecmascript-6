var cities = new Map();

cities.set(1, 'São Paulo');
cities.set(2, 'São José dos Campos');
cities.set(3, 'Parati');
cities.set(1, 'Praia Grande');


cities.get(2);

for(var keys of cities.keys()){
  console.log(keys);
}