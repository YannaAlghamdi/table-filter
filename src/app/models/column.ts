
export class Column {
  private name: string;
  private type: string;

  static generateColumns(entry: any) {
    const fields = new Array<Column>();
    Object.entries(entry).forEach(e => {
      fields.push(new Column()
        .withName(e[0])
        .withType(typeof(e[1])));
    });
    return fields;
  }

  public getName(): string { return this.name; }
  public withName(arg: string) { this.name = arg; return this; }

  public getType(): string { return this.type; }
  public withType(arg: string) { this.type = arg; return this; }

}
