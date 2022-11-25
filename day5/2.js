function processData(input) {
  let arr = input.split('\n');
  let len = arr[0];
  let q = [];
  for (let i = 1; i <= len; i++) {
    switch (true) {
      case arr[i][0] == 1:
        q.push(arr[i].slice(2));
        break;
      case arr[i] == 2:
        q.shift();
        break;
      case arr[i] == 3:
        console.log(q[0]);
        break;
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
