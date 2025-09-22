function pow(x,y) {
  let t=1;
  for (let r=0;r<y;r++) {
    t=t*x; 
  }
  
  return t;
  
}

let v=pow(2,3)
console.log(v)