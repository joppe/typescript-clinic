import {Greeter} from './Greeter.js';

const greeter = new Greeter('World!');
document.querySelector('.js-greeter').textContent = greeter.greet();
