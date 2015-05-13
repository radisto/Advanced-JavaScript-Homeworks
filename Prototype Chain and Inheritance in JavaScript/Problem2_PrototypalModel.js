Object.prototype.extends = function (properties) {
    function f() {};
    var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    };

    f.prototype._super = this;
    return new f();
}

var Shape = {
    constructor: function constructor(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
        return this;
    }
};

var Circle  = Shape.extends({
    constructor: function constructor(x, y, r, color) {
        this._super.constructor.call(this, x, y, color);
        this._r = r;
        return this;
    },

    toString: function toString() {
        return 'oX: ' + this._x + ', oY: ' + this._y + ', R: ' + this._r + ', Color: ' + this._color;
    }
});

var Rectangle   = Shape.extends({
    constructor: function constructor(x, y, width, height, color) {
        this._super.constructor.call(this, x, y, color);
        this._width = width;
        this._height = height;
        return this;
    },

    toString: function toString() {
        return 'X: ' + this._x + ', Y: ' + this._y + ', Width: ' + this._width + ', Height: ' + this._height + ', Color: ' + this._color;
    }
});

var Triangle  = Shape.extends({
    constructor: function constructor(x, y, bx, by, cx, cy, color) {
        this._super.constructor.call(this, x, y, color);
        this._bx = bx;
        this._by = by;
        this._cx = cx;
        this._cy = cy;
        return this;
    },

    toString: function toString() {
        return 'aX: ' + this._x + ', aY: ' + this._y + ', bX: ' + this._bx + ', bY: ' + this._by +
            ', cX: ' + this._cx + ', cY: ' + this._cy + ', Color: ' + this._color;
    }
});

var Line  = Shape.extends({
    constructor: function constructor(x, y, bx, by, color) {
        this._super.constructor.call(this, x, y, color);
        this._bx = bx;
        this._by = by;
        return this;
    },

    toString: function toString() {
        return 'aX: ' + this._x + ', aY: ' + this._y + ', bX: ' + this._bx + ', bY: ' + this._by + ', Color: ' + this._color;
    }
});

var Segment  = Shape.extends({
    constructor: function constructor(x, y, bx, by, color) {
        this._super.constructor.call(this, x, y, color);
        this._bx = bx;
        this._by = by;
        return this;
    },

    toString: function toString() {
        return 'aX: ' + this._x + ', aY: ' + this._y + ', bX: ' + this._bx + ', bY: ' + this._by + ', Color: ' + this._color;
    }
});

var circle = Object.create(Circle).constructor(1, 2, 3, 4);
console.log(circle.toString());
var rectangle = Object.create(Rectangle).constructor(1, 2, 3, 4, 5);
console.log(rectangle.toString());
var triangle = Object.create(Triangle).constructor(1, 2, 3, 4, 5, 6, 7);
console.log(triangle.toString());
var line = Object.create(Line).constructor(1, 2, 3, 4, 5);
console.log(line.toString());
var segment = Object.create(Segment).constructor(1, 2, 3, 4, 5);
console.log(segment.toString());