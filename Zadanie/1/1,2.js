function fun12 (stl) {
    let str = stl.replaceAll('.', '. ').replaceAll(',', ', ')
    .replaceAll('.', '. ').replaceAll(' .', '.').replaceAll(' ,', ',')
    .replaceAll('  ', ' ').replaceAll('  ', ' ');
    str = str.replaceAll('  ', ' ');
    
    return str;
  }
  let stl = `Вот  пример строки,в которой используются знаки препинания.
    После знаков должны стоять пробелы , а перед знаками их быть не должно .
    Если есть лишние подряд идущие пробелы, они должны быть устранены.`
  console.log(fun12(stl));