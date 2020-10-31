import uniqid from 'uniqid';

export function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export class rgb {
    constructor() {
        this.green = randomIntFromInterval(0, 255);
        this.blue = randomIntFromInterval(0, 255);
        this.red = randomIntFromInterval(0, 255);
        this.id = uniqid();
    }
    htmlRespresent() {
        return `RGB(${this.red}, ${this.green}, ${this.blue})`;
    }
}