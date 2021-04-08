import { Map } from "typescript";

class CalculateRate {
  private idOrigem: string;

  private idDestino: string;

  private minutes: number;

  private hasPlan: boolean;

  private price: number;

  private mp: any;

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
   * getPrice
   */

  /**
   * getId
   */

  public getPrice(): number {
    this.mp = new Map();
    if (this.idOrigem === "011") {
      this.mp.set("016", 1.9);
      this.mp.set("017", 1.7);
      this.mp.set("018", 0.9);
    }
    if (this.idOrigem === "016") {
      this.mp.set("011", 2.9);
    }
    if (this.idOrigem === "017") {
      this.mp.set("011", 2.7);
    }
    if (this.idOrigem === "018") {
      this.mp.set("011", 1.9);
    }

    const valueFinal = this.minutes * this.mp[this.idDestino];

    return valueFinal;
  }
}

export default CalculateRate;
