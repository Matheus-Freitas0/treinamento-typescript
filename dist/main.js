"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const lancer = new carro_1.Carro("mitsubishi", "evo x", 2012, "branco", 600000);
const civic = new carro_1.Carro("honda", "civic", 2012, "preto", 35000);
const corolla = new carro_1.Carro("toyota", "corolla", 2012, "azul", 70000);
const palio = new carro_1.Carro("fiat", "palio", 2012, "verde", 20000);
const onix = new carro_1.Carro("chevrolet", "onix", 2012, "cinza", 25000);
lancer.exibirDados();
civic.exibirDados();
corolla.exibirDados();
palio.exibirDados();
onix.exibirDados();
//# sourceMappingURL=main.js.map