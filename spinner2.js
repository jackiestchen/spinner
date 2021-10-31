const animationArr = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ']
let delay = 100;

for (const el of animationArr) {
  setTimeout(() => {
    process.stdout.write(el)
  }, delay);
  delay += 200;
}