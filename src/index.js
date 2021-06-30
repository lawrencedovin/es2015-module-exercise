import {choice, remove} from './helpers';
import {foods} from './foods';

let randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit}`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');
