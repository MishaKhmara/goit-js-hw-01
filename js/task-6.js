


let total = 0;


while (true) {
    let input = prompt('введите число');
    if (input === null) {
        break;
  }
    input = Number(input);
    total += input;
}
console.log(`Общая сумма ${total}`);
alert(`Общая сумма ${total}`);