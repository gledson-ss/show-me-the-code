class CalculateRate {
  idOrigem: string;

  idDestino: string;

  minutes: number;

  hasPlan: boolean;

  price: number;

  constructor() {
    this.idOrigem = "";
    this.idDestino = "";
    this.minutes = 0;
    this.hasPlan = false;
    this.price = 0;
  }

  /**
   * setIdOrigem
   */
  public setIdOrigem(id: string): void {
    this.idOrigem = id;
  }

  /**
   * idDestino
   */
  public setIdDestino(id: string): void {
    this.idDestino = id;
  }

  /**
   * setMinutes
   */
  public setMinutes(min: number): void {
    this.minutes = min;
  }

  /**
   * setHasPlan
   */
  public setHasPlan(has: boolean): void {
    this.hasPlan = has;
  }

  /**
   * setPrice
   */
}

export default CalculateRate;
