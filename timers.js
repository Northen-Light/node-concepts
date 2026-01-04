const timer1 = setTimeout(() => {
  console.log('timer1');
}, 2000);

const timer2 = setTimeout(() => {
  clearTimeout(timer1);
  timer1.refresh();
}, 1000);

const timer3 = setTimeout(() => {
  console.log('timer3');
}, 3000);