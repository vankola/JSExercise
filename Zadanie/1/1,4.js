function arra(str) {
    let s =[]
    str = str.replaceAll(',', ' ');
    str = str.split(" ");
  
    for (let i of str) {
      console.log(i)
      s.push(i.toLowerCase());
    }
    const symbols = new Map();
  
    for (const c of s) {
        const currCount = symbols.get(c) || 0;
        symbols.set(c, currCount + 1);
    }
    const orderedSymbols = [...symbols.entries()];
  
    return orderedSymbols;
  }
  let text1 = `Текст, в котором слово текст 
    несколько раз встречается и слово тоже`
  console.log( arra(text1) );