import { Carro } from "./modules/carro.js";

const Voyage = new Carro(`Voyage`, `WV`, 2013);

Voyage.ligar();
Voyage.acelerar();

console.log(`A velocidade atual do carro é ${Voyage.velocidade}km/h`);

for(let i = 0; i < 1000; i++){
    Voyage.acelerar();
}

console.log(`A velocidade atual do carro é ${Voyage.velocidade}km/h`);

Voyage.frear();
Voyage.frear();

console.log(`A velocidade atual do carro é ${Voyage.velocidade}km/h`);


Voyage.desligar();

for(let i = 0; Voyage.velocidade >= 20; i++){
    Voyage.frear();
}

console.log(`A velocidade atual do carro é ${Voyage.velocidade}km/h`);

Voyage.desligar();

console.log(`A velocidade atual do carro é ${Voyage.velocidade}km/h`);
