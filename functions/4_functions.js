function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
console.log(add(2, 3));
console.log(toUpperCase('hello'));


//-------------classes
// class Car {
//     constructor(color, model, speed) {
//         this.color = color
//         this.model = model
//         this.speed = speed
//     }

//     print_car_info() {
//         console.log(`${this.model}: ${this.color}, ${this.speed}`)
//     }
// }

// class SportCar extends Car {
//     constructor(color, model, speed, sponsor) {
//         super(color, model, speed)
//         this.sponsor = sponsor
//     }

//     print_car_info() {
//         super.print_car_info()
//         console.log(this.sponsor)
//     }
// }

// car1 = new Car('red', 'BMW', '170')
// car1.print_car_info()
// sport_car1 = new SportCar('red', 'BMW', '170', 'Red Bull')
// sport_car1.print_car_info()
// console.log(sport_car1)
