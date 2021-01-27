export class Singleton {
  private static mInstance: Singleton;
  private counter: number = 0;

  private constructor() {}

  static getInstance(): Singleton {
    if (this.mInstance == null) {
      this.mInstance = new Singleton();
    }
    return this.mInstance;
  }

  countSingleton(): number {
    return ++this.counter;
  }
}

/**Cannot do this */
//const instance = new Singleton();

/**Instead do this */
const instanceOne = Singleton.getInstance();
console.log(instanceOne.countSingleton());
console.log(instanceOne.countSingleton());

const instanceTwo = Singleton.getInstance();
console.log(instanceOne.countSingleton());
