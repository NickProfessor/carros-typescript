import { Carro } from "../modules/carro.js";
import { Carros } from "../modules/carros.js";

export class CarroController {
  private _inputQuilometros: HTMLInputElement;
  private _inputGasolina: HTMLInputElement;
  private _inputCor: HTMLInputElement;
  private _campoDeCarro: HTMLElement;
  private _carros = new Carros();
  constructor() {
    this._inputQuilometros = document.querySelector(".kmRodado");
    this._inputGasolina = document.querySelector(".gasolinaAtual");
    this._inputCor = document.querySelector(".cor");
    this._campoDeCarro = document.querySelector("#carros");
  }

  public adicionaCarro(): void {
    const carro = this.criaCarro();
    this._carros.adicionaCarro(carro);
    this.renderizaCarro(carro);
    console.log(this._carros.lista());
    this.limparFormulario();
  }

  public criaCarro(): Carro {
    const id: number = this._carros.lista().length + 1;
    const quilometrosRodados: number = parseInt(this._inputQuilometros.value);
    const gasolinaAtual: number = parseInt(this._inputGasolina.value);
    const cor: string = this._inputCor.value;
    return new Carro(id, gasolinaAtual, quilometrosRodados, cor);
  }
  public renderizaCarro(carro: Carro): void {
    this._campoDeCarro.innerHTML += `
        <div class="carro">
            <h1>Carro ${carro.id}</h1>
            <i class="fa-solid fa-car" style="color: ${carro.corAtual}"></i>
            <h3>Gasolina atual: ${carro.gasolinaAtual} L</h3>
            <h3>Km rodados: ${carro.quilometrosRodados} km</h3>
        </div>
    `;
  }
  public limparFormulario(): void {
    this._inputQuilometros.value = "";
    this._inputGasolina.value = "";
    this._inputCor.value = "#ffffff";
    this._inputQuilometros.focus();
  }
}
