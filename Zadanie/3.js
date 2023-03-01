

class Rectangl {
    constructor(prod1, prod2, prod3, prod4, prod5) {
      this.products = [];
      
    }
    get area() {
     
      return this.calcArea();
    }
    
    calcArea() {
      this.products.push(prod1,prod2,prod3,prod4,prod5) 
      
      return this.products;
    }
  
  }
  
  let prod1 = ['fdazbuka', '5', '1', 'Красиваяbc' ];
  let prod2 = ['fdmagnfditab', '109', '5', 'тяжелыйabc'];
  let prod3 = ['metefdorfd', '60', '30', 'свет  даетabcd'];
  let prod4 = ['masfdhinafd', '6', '1', 'redabc'];
  let prod5 = ['fdruchka', '1500', '1200', 'bluzac abc'];
  
  let masivProd2 = new Rectangl(prod1, prod2, prod3, prod4,prod5);
  let masivProd = masivProd2.area 
  
  
  let NMP = []
  
  function razrezStrokiCM (stokaComanda) { // Разбор командной строки
    let stt
    let sttt 
    let masStCMD = []
    stt  = stokaComanda.split('&')  // разделение строки
  
    for (let i = 0; i < stt.length; i++){ //передача каждой команды из строк
      sttt = stt[i].split('-') // разделение команд каждой строки
      //console.log(sttt)
      masStCMD.push(sttt)
    }
    
    let otv = filt(masStCMD,masivProd)
    return otv;
  }
  
  
  function filt (stCM,prod) { //определение команд и передача их в функции
    
    let kk = []
    
    for (let st of stCM){
      
      switch (st[0]) { //получение перового элемента из строки 
        case 'name': 
          kk = (nameCM(st[1],st[2],0,prod));
          break;
  
        case 'price':  
           kk = (priceCM(st[1],kk,1));      
          break;
  
        case 'quantity':  
          kk = (priceCM(st[1],kk,2)); 
          break;
  
        case 'description':      
          kk = (nameCM(st[1],st[2],3,kk)); 
          break;
      } 
    }
    //console.log(kk)
    return kk;
   
  
  
  }
  
  
  function priceCM (sv,NPMp,n) { // команда price / quantity
    let npm1 = []
    switch(sv.slice(0, -1)) {
      case '=':
        for (let i = 0; i < NPMp.length; i++){
          if (NPMp[i][n] == Number(sv.substring(1))){
             npm1.push(NPMp[i])
          }
        }      
        break;
      case '>':
        for (let i = 0; i < NPMp.length; i++){
          if (NPMp[i][n] > Number(sv.substring(1))){
             npm1.push(NPMp[i])
          }
        }      
        break;
      case '<':
        for (let i = 0; i < NPMp.length; i++){
          if (NPMp[i][n] < Number(sv.substring(1))){
             npm1.push(NPMp[i])
          }
        }      
        break;  
      case '>=':
        for (let i = 0; i < NPMp.length; i++){
          if (NPMp[i][n] >= Number(sv.slice(-1))){
             npm1.push(NPMp[i])
             console.log(npm1)
          }
        } 
        break;  
      case '<=':
        for (let i = 0; i < NPMp.length; i++){
          if (NPMp[i][n] <= Number(sv.slice(-1))){
             npm1.push(NPMp[i])
          }
        }  
        break;   
    }
  
    return npm1;
  }
  
  
  function nameCM (cm,sv,n,npm) { //команда name / description
  let npmname = []
    if (cm == 'contains') {
      for (let i = 0; i < npm.length; i++) {
        if (npm[i][n].includes(sv) == true){
          npmname.push(npm[i])
         }
        }
    }
  
    if (cm == 'ends' ) {
      for (let i = 0; i < npm.length; i++) {
        if (npm[i][n].endsWith(sv) == true){
          npmname.push(npm[i])
         }
        }
    }
    
    if (cm == 'starts') {
      for (let i = 0; i < npm.length; i++) {
        
        if (npm[i][n].startsWith(sv) == true){
          npmname.push(npm[i])   
        }
      }
    } 
    
    return npmname;
  }
  
  
  
  let qwe = razrezStrokiCM("name-contains-fd&price-=6&quantity-=1&description-ends-abc")
  let ccc = razrezStrokiCM("name-starts-fd&quantity-=5")
  
  
  console.log(qwe)
  console.log(ccc)