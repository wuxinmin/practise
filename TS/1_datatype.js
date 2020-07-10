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
//Boolean
var bool = true;
//string
var str = 'abc';
//number
var num = 123;
//array
// var arr:string[] = [1,2,3,'abc'];//编译报错
var arr1 = ['zbc', 'def'];
//元组tuple  （表格）
var tup = ['abc', 123, true];
tup[0] = 'def';
//tup[1] = false;//编译报错
// tup.push('hello');
//console.log(tup[3]); //编译报错，得不到加入的值
//枚举
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female"; //默认属性值1  可以赋值
})(Gender || (Gender = {}));
var gender = Gender.Male;
if (gender == Gender.Male) {
}
else if (gender == Gender.Female) {
}
//any  
//什么时候用any
var x = 5;
x = 'abc'; //加any不报错
//1.用户不确定数据类型的时候用any
var input = prompt("请输入信息："); //在网页中弹出一个输入框，这里面输入的东西不确定
//2.本身就想这样，（不推荐）
var arr = [456, 'asb', true];
//void 定义没有返回值的函数
function fn() {
}
fn();
//typeof
console.log(typeof 123); //返回number
console.log(typeof 'abc'); //返回string
//面试
console.log(typeof null); //typeof null会返回 object
console.log();
//never
/* function error(): never{
    throw new Error('error...');
}
error(); */
// function getName(): string{
//     //...
//     if(){
//         throw new Error('error...');
//     }
// }
//类型推论
var num2 = 5; //类型推论为number
//num2 = 'abc'; //error
var arr3 = [123, 'abc', true, null]; //类型推论为联合类型
var Aniaml = /** @class */ (function () {
    function Aniaml() {
    }
    return Aniaml;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog1;
}(Aniaml));
;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Aniaml));
;
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fish;
}(Aniaml));
;
var zoo = [new Dog1(), new Cat()];
zoo.push(new Fish());
/* (Dog | Cat) */
//上下文推论
//看左边来推论右边函数类型
window.onmousedown = function (e) {
    console.log(e.button);
};
window.onkeydown = function (k) {
};
//类型断言
/* 类型断言:它之所以不被称为「类型转换」，是因为转换通常意味着某种运行时
的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提
供关于如何分析代码的方法
 */
var someValue = "this is a string";
var strLength = someValue.length;
console.log(someValue.length); //当你确定这个值时string时就写<string>,很像强制类型转换
var x3;
x3 = 'abc';
x3 = 123;
x3 = true;
