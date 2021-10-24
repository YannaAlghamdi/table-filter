
export class Column {
  private name: string;
  private type: string;

  public getName(): string { return this.name; }
  public withName(arg: string) { this.name = arg; return this; }

  public getType(): string { return this.type; }
  public withType(arg: string) { this.type = arg; return this; }
}
