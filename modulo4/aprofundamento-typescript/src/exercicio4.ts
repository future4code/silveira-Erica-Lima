// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

//tsc --init e npm run start

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1, pokemon2, pokemon3);

//c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.


// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// npm run start