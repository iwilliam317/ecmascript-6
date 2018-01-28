var cities = new Map();

cities.set(1, 'São Paulo');
cities.set(2, 'São José dos Campos');
cities.set(3, 'Parati');
cities.set(4, 'Praia Grande');


cities.get(2);

for(var keys of cities.keys()){
  console.log(keys);
}

for(var values of cities.values()){
  console.log(values);
}

for(var entries of cities.entries()){
  console.log(entries);
}