const { Triangle, Circle } = require('../lib/Shapes.js')

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Circle', () => {
    describe('fillcolor', () => {
        it('should take in set color and check to see it is correct', () => {
            const shape = new Circle();
            const circle = shape.fillcolor("blue");
            expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="blue"/>`);
        });
    });
});