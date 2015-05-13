var Shape = (function () {
    function Shape(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    Shape.prototype = {
        serialize: function () {
            var serializedShape = {
                x: this._x,
                y: this._y,
                color: this._color
            };
            return serializedShape;
        }
    };

    return Shape;
})();

var Circle = (function () {
    function Circle(x, y, r, color) {
        Shape.call(this, x, y, color);
        this._r = r;
    }

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.serialize = function () {
        var serializedRect = Shape.prototype.serialize.call(this);
        serializedRect.r = this._r;
        return serializedRect;
    };

    return Circle;
})();

var Rectangle = (function () {
    function Rectangle(x, y, width, height, color) {
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;
    }

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.serialize = function () {
        var serializedRect = Shape.prototype.serialize.call(this);
        serializedRect.width = this._width;
        serializedRect.height = this._height;
        return serializedRect;
    };

    return Rectangle;
})();

var Line = (function () {
    function Line(x, y, bx, by, color) {
        Shape.call(this, x, y, color);
        this._bx = bx;
        this._by = by;
    }

    Line.prototype = Object.create(Shape.prototype);
    Line.prototype.constructor = Line;

    Line.prototype.serialize = function () {
        var serializedRect = Shape.prototype.serialize.call(this);
        serializedRect.bx = this._bx;
        serializedRect.by = this._by;
        return serializedRect;
    };

    return Line;
})();

var Segment = (function () {
    function Segment(x, y, bx, by, color) {
        Line.call(this, x, y, bx, by, color);
    }

    Segment.prototype = Object.create(Line.prototype);
    Segment.prototype.constructor = Segment;

    Segment.prototype.serialize = function () {
        return Line.prototype.serialize.call(this);
    };

    return Segment;
})();

var Triangle = (function () {
    function Triangle(x, y, bx, by, cx, cy, color) {
        Line.call(this, x, y, bx, by, color);
        this._cx = cx;
        this._cy = cy;
    }

    Triangle.prototype = Object.create(Line.prototype);
    Triangle.prototype.constructor = Triangle;

    Triangle.prototype.serialize = function () {
        var serializedRect = Line.prototype.serialize.call(this);
        serializedRect.cx = this._cx;
        serializedRect.cy = this._cy;
        return serializedRect;
    };

    return Triangle;
})();

var circle = new Circle(1, 2, 3, 4);
console.log(circle);
var rectangle = new Rectangle(1, 2, 3, 4, 5);
console.log(rectangle);
var triangle = new Triangle(1, 2, 3, 4, 5, 6, 7);
console.log(triangle);
var line = new Line(1, 2, 3, 4, 5);
console.log(line);
var segment = new Segment(1, 2, 3, 4, 5);
console.log(segment);