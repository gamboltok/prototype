"use strict";

const animal = {
    hp: 5,
    dmg: 10,
    say: function(){
        console.log("hello");
    }
};

const murlock = Object.create(animal);
// murlock.hp;

// murlock.__proto__ = animal; //__proto__ не используется

// Object.setPrototypeOf(murlock, animal);


const mouse = {
    usb: "samsung",
    bluetooth: "xiaomy",
    connectMouse: function(){
        console.log("подключаем устройство");
    }
};

const phone = Object.create(mouse);
console.log("MOUSE------");
console.log(mouse);
console.log("PHONE------");
console.log(phone.connectMouse());
