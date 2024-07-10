export class Carro{
    constructor( private _marca:string,
        private _modelo:string,
        private _ano:number,
        private _cor:string,
        private _valor:number
    ){
    }  
    get marca(): string { 
        return this._marca;
    }
    set marca(marca: string){
    this._marca = marca;
    }
    get modelo(): string{
        return this._modelo;
    }
    set modelo(modelo: string){
    this._modelo = modelo;
    }
    get ano(): number{
        return this._ano;
    }
    set ano(ano: number)
    {
    this._ano = ano;
    }
    get cor(): string{
        return this._cor;
    }
    set cor(cor: string)
    {
    this._cor = cor;
    }
    get valor(): number{
        return this._valor;
    }
    set valor(valor: number)
    {
    this._valor = valor;
    }

exibirDados(){
    console.log(`Dados do Carro: Marca: ${this._marca}, Modelo: ${this._modelo}, Ano: ${this._ano}, Cor: ${this._cor}, Valor: ${this._valor}`);
}
}
