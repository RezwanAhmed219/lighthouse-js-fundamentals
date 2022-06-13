function range(start, end, step) {
  if (start !== undefined && end !== undefined && step !== undefined && start < end && step > 0) {
    var result = [];
    for (var i = start; i <= end; i = i + step) {
      result.push(i);
    }
    return result;
  } else {
    return [];
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));