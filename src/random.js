let cc = console.log;

export const random = () => {
  let num = Math.random();

  if (num <= 0.34) {
    cc("tail");
  } else if (num > 0.5) {
    cc("head");
  } else {
    cc("edge");
  }
  return num;
};
random();
