"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1.对象与类
/* 什么是对象？  everything is object！
   什么是类？    是对一类对象的抽象。
   什么时候需要定义类？*/
//定义类
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 18; //私有类 可以不赋初值，通过传参也可以
        this._gender = "female";
        //只读
        this.height = '180cm';
        this.name = name;
    }
    Person.prototype.say = function () {
        return 'hello';
    };
    Person.prototype.growUp = function () {
        this.age++;
        console.log("\u5E74\u9F84\uFF1A" + this.age);
    };
    Person.prototype.getAge = function (message) {
        if (message == 'I love you') {
            return this.age;
        }
        else {
            throw new Error('就不告诉你');
        }
    };
    Person.prototype.setAge = function (age) {
        if (age > 100) {
            throw new Error('想活多久');
        }
        this.age = age;
    };
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            if (gender == 'male' || gender == "female") {
                this._gender = gender;
            }
            else {
                throw new Error('你是外星来的吗？？');
            }
        },
        enumerable: true,
        configurable: true
    });
    //静态
    Person.legs = 2;
    return Person;
}());
var p1 = new Person('lisi');
var p2 = new Person('zs');
// console.log(p1.name);
// p2.name = 'wmz';
// console.log(p2.name);
// console.log(p1.say());
// p1.growUp();
//存取器getter和setter
// p1.name='sx'; //可以随意修改
// console.log(p1.name);
//访问包含读取和修改两种操作
// p1.setAge(112);
// console.log(p1.getAge('I love you'));
// p1.gender = 'male';
// console.log(p1.gender);
//p1.height('150cm'); //编译报错，只读不能修改
// console.log(p1.height);  //可读,就是不能改
//对静态访问  直接  类名.属性名不需要new
// console.log(Person.legs); //静态方法
//继承 
//继承非私有的东西，构造函数也不能
var TheWhite = /** @class */ (function (_super) {
    __extends(TheWhite, _super);
    function TheWhite(name, country) {
        var _this = _super.call(this, name) || this;
        _this.country = country;
        return _this;
    }
    //子类中方法重写
    TheWhite.prototype.say = function () {
        return "hello, my name is: " + this.name + ",I am from " + this.country;
    };
    return TheWhite;
}(Person));
var p3 = new TheWhite('john', 'UK');
// console.log(p3.name);
// console.log(p3.country);
// console.log(p3.getAge('I love you'));
// console.log(TheWhite.legs);  //静态也继承了
// console.log(p3.say());//会调用重写的方法
//抽象类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// var a1 = new Animal();  //报错：抽象的不能new，new是new一个具体的
//抽象都是被用来做继承的
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.shout = function () {
        return '汪汪';
    };
    return Dog;
}(Animal));
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1(name) {
        return _super.call(this, name) || this;
    }
    Cat1.prototype.shout = function () {
        return "\u6211\u7684\u540D\u5B57\u53EB" + this.name + ",\u55B5\u55B5";
    };
    return Cat1;
}(Animal));
// var dog1 = new Dog('旺财');
// console.log(dog1.name);
// console.log(dog1.shout());
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey(name) {
        return _super.call(this, name) || this;
    }
    Monkey.prototype.shout = function () {
        return "\u6211\u7684\u540D\u5B57\u53EB" + this.name + ",\u55B3\u55B3";
    };
    return Monkey;
}(Animal));
var MonkeyKing = /** @class */ (function (_super) {
    __extends(MonkeyKing, _super);
    function MonkeyKing(name) {
        return _super.call(this, name) || this;
    }
    MonkeyKing.prototype.fly = function () {
        return '我可以架筋斗云飞';
    };
    MonkeyKing.prototype.magic = function () {
        return "\u6211\u53EF\u4EE5\u4F7F\u7528\u6BEB\u6BDB\u53D8\u4E1C\u897F";
    };
    return MonkeyKing;
}(Monkey));
var MachineCat = /** @class */ (function (_super) {
    __extends(MachineCat, _super);
    function MachineCat(name) {
        return _super.call(this, name) || this;
    }
    MachineCat.prototype.fly = function () {
        return '我可以头插小风扇飞';
    };
    MachineCat.prototype.magic = function () {
        return "\u6211\u53EF\u4EE5\u4F7F\u7528\u53E3\u888B\u53D8\u4E1C\u897F";
    };
    return MachineCat;
}(Cat1));
var SuperMan = /** @class */ (function (_super) {
    __extends(SuperMan, _super);
    function SuperMan(name) {
        return _super.call(this, name) || this;
    }
    SuperMan.prototype.fly = function () {
        return "\u6211\u662F" + this.name + "\u6211\u53EF\u4EE5\u4E3E\u8D77\u53CC\u624B\u98DE";
    };
    return SuperMan;
}(Person));
var wukong = new MonkeyKing('孙悟空');
console.log(wukong.name);
console.log(wukong.shout());
console.log(wukong.magic());
console.log(wukong.fly());
var doraamon = new MachineCat('哆啦A梦');
console.log(doraamon.shout());
console.log(doraamon.magic());
console.log(doraamon.fly());
var superman = new SuperMan('卡尔');
console.log(superman.say());
console.log(superman.fly());
var Dogg = /** @class */ (function () {
    function Dogg(name) {
        this.name = name;
    }
    Dogg.prototype.shout = function () {
        return '我又汪汪叫了。。。';
    };
    return Dogg;
}());
var dog2 = new Dogg('大黄');
console.log(dog2.name);
console.log(dog2.shout());
function checkPersonInFo(person) {
    console.log(person.name, person.age);
}
checkPersonInFo({ name: 'xiaoming', age: 12 });
var add = function (x, y) {
    return x + y;
};
console.log(add(2, 6));
