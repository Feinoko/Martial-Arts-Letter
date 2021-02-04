class Dummy {

  constructor(var1, var2) {
    this.var1 = var1;
    this.var2 = var2;
  }

  firstFunc() {
    console.log(`called 1st func, value of var1 is ${this.var1} and var2 is ${this.var2}`);
  }

  secondFunc() {
    this.firstFunc();
    console.log('called 2nd func');
  }

}

export { Dummy as default };