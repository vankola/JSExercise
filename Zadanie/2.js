function fun2 (a,b){
    let m = [];
    m.push(a + b);
    m.push(a - b);
    m.push(a * b);
    m.push(a / b);
  
    return m;
  }
  aBig = 3929488724097859382758889809n;
  bBig = 322309498736987243097860n;
  console.log( fun2(aBig,bBig) );
  