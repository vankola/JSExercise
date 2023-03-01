function fun11 (stroka) {
    let s = stroka.toLowerCase()
  
    return s[0].toUpperCase() + s.slice(1);
  }
  console.log(fun11('faasDASFFA'))