const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
//event jab water full hoa jaye toa turn off the motor
//so water full is an event
//action on event is motor is turned off
myEmitter.on('waterfull', () => {
  console.log('PLEASE TURN OFF THE MOTOR');
setTimeout(() => {
    console.log("please turnoff the motor ,gentle reminder")
}, 3000);
});
console.log("script is running")
myEmitter.emit('waterfull');  //when this event happen then only the action will be performed
console.log("script is still running")
//set timeout says jab saare kam hoa jayege tabmai run hooga