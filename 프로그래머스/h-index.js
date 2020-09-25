let citations = [3, 0, 6, 1, 5];

let h = 0;
let count = 0;

while(h <= count) {
  count = 0;
  citations.forEach(e => {
    if(h <= e) count++;
  });
  if(h <= count) h++;
}

let answer = h - 1;