import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

const reversePair = (pair) => cons(cdr(pair), car(pair));
export default reversePair;
