const carro = {
    marca: 'ford',
    modelo: 'ka',
    ano: 2015,
    placa: 'AFC3S44',
    buzina: function() {
        console.log("boooooonnn");
    },
    completo: function(){
        return 'A marca é '+this.marca+' O modelo é '+this.modelo+' O ano è '+this.ano+' A placa é '+this.placa;
    }
}

console.log(carro.completo());