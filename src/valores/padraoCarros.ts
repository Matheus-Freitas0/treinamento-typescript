import { Carro } from "../carro"

export class BancoDadosCarros {
constructor (){
const lancer = new Carro("mitsubishi","evo x", 2012 ,"branco",600000 )
const civic = new Carro("honda","civic", 2012 ,"preto",35000)
const corolla = new Carro("toyota","corolla", 2012 ,"azul",70000)
const palio = new Carro("fiat","palio", 2012 ,"verde",20000)
const onix = new Carro("chevrolet","onix", 2012 ,"cinza",25000)

this.carros.push(lancer)
this.carros.push(civic)
this.carros.push(corolla)
this.carros.push(palio)
this.carros.push(onix)
}
carros: Carro[] = []
}

