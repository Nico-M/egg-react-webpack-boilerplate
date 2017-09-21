function mixin(target, source) {
  const mixinProperty = typeof source == 'object' ? Object.getOwnPropertyNames(source) : Object.getOwnPropertyNames(source.prototype);
  mixinProperty.forEach(property => {
    if (property !== 'constructor') {
      target[property] = source.prototype[property];
    }
  });
};

class A{
  constructor(config){
    this.config = config;
    console.log('---constructor A');
  }

  init(){
    console.log('===A');
  }

  initA(){
    console.log('===initA');
  }
}


class B extends A{
  constructor(config){
    super(config)
    console.log('---constructor B');
  }

  init(){
    super.init();
    console.log('===B');
  }

  initB(){
    console.log('===initB');
  }
}


const C = WebpackBuilder => class extends WebpackBuilder {
  constructor(config){
    super(config)
    console.log('---constructor C');
  }

  init(){
    super.init();
    console.log('===C');
  }
};


class D extends C(B){
  constructor(config){
    super(config)
    console.log('---constructor D');
  }

  init(){
    super.init();
    console.log('===D');
  }

  initC(){
    console.log('===initc');
  }
}

console.log(new D().init());

