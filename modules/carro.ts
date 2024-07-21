export class Carro {
  constructor(
    public readonly id: number,
    public readonly gasolinaAtual: number,
    public readonly quilometrosRodados: number,
    public readonly corAtual: string
  ) {}

  public get gasolinaPraDezKm() {
    return 2;
  }
}
