function processData(input) {
  const inputArr = input.split('\n');
  let str = 'abcde';
  const stack = [];
  for (let i = 1; i < inputArr.length; i++) {
    const ops = inputArr[i];
    const key = ops[0];
    const value = ops.slice(2);
    if (key == 1) {
      str += value;
      stack.push(`2 ${value.length}`);
    } else if (key == 2) {
      const text = str;
      str = text.slice(0, text.length - value);
      stack.push(`1 ${text.slice(text.length - value)}`);
    } else if (key == 3) {
      console.log(str[value - 1]);
    } else {
      const pop = stack.pop();
      if (pop[0] == 1) {
        str += pop.slice(2);
      } else {
        str = str.slice(0, str.length - pop.slice(2));
      }
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
