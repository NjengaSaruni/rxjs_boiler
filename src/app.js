import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#button');
const input = $('#input');
const output = $('#output');
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
    function (event) {
        console.log(event.target.innerHTML);
    },
    function (err) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    }
);

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
    function (event) {
        console.log(event.target.value);
        output.append(event.target.value);
    },
    function (err) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    }
);

const mouseMoveStream$ = Rx.Observable.fromEvent(output, 'mousemove');

mouseMoveStream$.subscribe(
    function (event) {
        output.html(`<h1>X :${event.clientX} Y: ${event.clientY}</h1>`);
        console.log(event.clientX);
    },
    function (err) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    }
);