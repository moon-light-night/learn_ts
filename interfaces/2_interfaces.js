var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 15
    }
};
rect2.color = 'black';
rect2.size.width = 999;
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '123456',
    size: {
        width: 5,
        height: 5
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.date = new Date();
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    color: 'black',
    border: '1px solid red',
    marginTop: '2px'
};
