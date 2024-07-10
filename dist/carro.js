"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(_marca, _modelo, _ano, _cor, _valor) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._ano = _ano;
        this._cor = _cor;
        this._valor = _valor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get ano() {
        return this._ano;
    }
    set ano(ano) {
        this._ano = ano;
    }
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
    }
    get valor() {
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    exibirDados() {
        console.log(`Dados do Carro: Marca: ${this._marca}, Modelo: ${this._modelo}, Ano: ${this._ano}, Cor: ${this._cor}, Valor: ${this._valor}`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=carro.js.map