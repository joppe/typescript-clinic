import {Greeter} from './Greeter.js';
import {Status} from './Status.js';

const model = new Status({
    name: 'World!'
});

const greeter = new Greeter({
    model,
    el: document.querySelector('.js-greeter')
});

greeter.render();
