export class Context {
  private readonly map: Map<string, any> = new Map<string, any>();

  get(key: string): any {
    return this.map.get(key);
  }

  set(key: string, val: any): void {
    this.map.set(key, val);
  }

  copyAndSet(key: string, val: any): Context {
    const copy = new Context();
    for (const k in this.map) {
      copy.map.set(k, this.map.get(k));
    }

    copy.map.set(key, val);
    return copy;
  }
}
