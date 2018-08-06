import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

const sumOfPairs = (pair1, pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
export default sumOfPairs;
