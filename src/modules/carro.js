export class Carro {

    //atributos
        marca;
        modelo;
        ano;
        velocidade = 0;
        estado = false;

    //construtor
    constructor(modelo, marca, ano){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    } 

    //metodos
        ligar(){
            if(this.estado == false){
                this.estado = true;
            }
        }

        acelerar(){
            //aumente a velocidade em 10km/h
            if(this.estado == true && this.velocidade < 200){
                this.velocidade += 10;
            }
            
        }
        frear(){
             //diminuir a velocidade em 10km/h
            if(this.estado == true && this.velocidade > 0){
                this.velocidade -= 10;
            }
        }
        desligar(){
            if(this.estado == true && this.velocidade <= 20){
                this.estado = false
                this.velocidade = 0;
            } else{
                console.log(`o carro só pode ser desligado com velocidade abaixo de 20km/h`)
            }
        }
    
    }
    