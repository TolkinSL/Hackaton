const sq1 = document.querySelector('.square-1');
const sq2 = document.querySelector('.square-2');
const sq3 = document.querySelector('.square-3');
const sq4 = document.querySelector('.square-4');
const sq5 = document.querySelector('.square-5');
const sq6 = document.querySelector('.square-6');
const sq7 = document.querySelector('.square-7');

const myArr = [sq1, sq2, sq3, sq4, sq5, sq6, sq7];
const myTemp = [];
let isActive = true;

const delEl = () => {
  let time = 500;
  isActive = false;
  const count = myTemp.length - 1;

  for (let i = 0; i <= count; i += 1){
    const elD = myTemp[i];
    setTimeout(() => {
      elD.classList.remove('square_on');
      if (i === count) {
        isActive = true;
      }
    }, time);
    time += 500;
  }
  myTemp.length = 0;
}
const myClick = (el) => {
  el.addEventListener('click', function() {
    if (isActive && !myTemp.includes(el)) {
      myTemp.push(el);
      el.classList.add('square_on');
      if (myTemp.length === 7) {
        delEl();
      }
    }
  });
};

for (const myEl of myArr) {
 myClick(myEl);
}

