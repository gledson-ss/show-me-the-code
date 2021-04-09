interface propsCalculateRate {
  setIdOrigem(id: string): void;
  setIdDestino(id: string): void;
  setMinutes(min: number): void;
  setHasPlan(has: boolean): void;
  setPlan(plan: number): void;
  getPrice(): number;
}

class CalculateRate {
  private idOrigem: string;

  private idDestino: string;

  private minutes: number;

  private hasPlan: boolean;

  private plan: number;

  private price: number;

  private mp: any;

  constructor() {
    this.idOrigem = "";
    this.idDestino = "";
    this.minutes = 0;
    this.hasPlan = false;
    this.price = 0;
    this.plan = NaN;
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

  public setPlan(plan: number): void {
    this.plan = plan;
  }

  private setPrice(): void {
    if (this.hasPlan) {
      this.price = this.CalculeValuePlanFinal();
    } else {
      this.price = this.CalculePlanNormal();
    }
  }

  private CalculateDescValuePlan(): number {
    if (this.minutes - this.plan <= 0) {
      return 0;
    }
    return this.minutes - this.plan;
  }

  private CalculeValuePlanFinal(): number {
    return this.mp.get(this.idDestino) * this.CalculateDescValuePlan() * 1.1;
  }

  private CalculePlanNormal(): number {
    return this.minutes * this.mp.get(this.idDestino);
  }

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

    this.setPrice();

    return parseFloat(this.price.toFixed(2));
  }
}

export type typeCalculateRate = propsCalculateRate;
export default CalculateRate;
