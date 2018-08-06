import { car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

const findPrimitiveBox = box =>{
  if(isPair(car(box)) === true){
    return findPrimitiveBox(car(box));
  } else if(isPair(cdr(box)) === true){
    return findPrimitiveBox(cdr(box));
  } else{
    return box;
  }
};

export default findPrimitiveBox;
