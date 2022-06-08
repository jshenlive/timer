const args = process.argv.slice(2);

const timer = function (arr) {
  arr = arr.filter(a => a > 0).filter(a => !isNaN(a));
  if (arr.length < 1) {
    return
  }

  for (const times of arr) {
    setTimeout(() => {
      process.stdout.write(`Alert for ${times} seconds\n`);
    }, Number(times) * 1000)
  }
};

timer(args);