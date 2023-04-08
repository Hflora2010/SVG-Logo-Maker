const { Circle, Polygon, Rectangle } = require('../lib/Shapes.js')

describe("Circle", () => {
    test("TEST", () => {
        const expectedSvg = `<circle cx="100" cy="100" r="100" fill="blue"/>`;
        const circle = new Circle("red", "SVG", "blue");
        expect(circle.display("blue")).toEqual(expectedSvg);
    });
  });

  describe("Polygon", () => {
    test("TEST", () => {
        const expectedSvg = `<polygon points= "50,0 100,100 0,100" x="14" y="23" fill="blue"/>`;
        const polygon = new Polygon("red", "SVG", "blue");
        expect(polygon.display("blue")).toEqual(expectedSvg);
    });
  });

  describe("Rectangle", () => {
    test("TEST", () => {
        const expectedSvg = `<rect x="10" y="100" width="150" height="150" fill="blue"/>`;
        const rectangle = new Rectangle("red", "SVG", "blue");
        expect(rectangle.display("blue")).toEqual(expectedSvg);
    });
  });