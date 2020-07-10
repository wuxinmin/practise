"use strict";
/* //函数声明
fn1();
function fn1(){
   
}//可以在前面调用

//函数表达式
var fn = function(){

}//不可以在前面调用 */
//参数类型
//ts中参数必须有返回值，返回值也要有参数，没有就写void没有返回值
/* function syaHello(name:string): string{
    return 'hello';
} */
//可选参数  ?就是可选，可传值可以不传值
/* function sayHello(name:string, age?:number): string{
    return `my name is ${name},age is ${age}`;
}
console.log(sayHello('list',23)); */
//传默认值18
/* function sayHello(name:string, age:number = 18): string{
    return `my name is ${name},age is ${age}`;
}
// console.log(sayHello('list'));
console.log(sayHello('list',55)); */
//剩余参数
/* function sayHello(name:string, age:number = 18,...arg: any): string{
    var str: string = '';
    for(var i=0; i<arg.length; i++){
        str += arg[i]+' ';
    }
    return `my name is ${name},age is ${age},${str}`;
}
// console.log(sayHello('list'));
console.log(sayHello('list',55,'male',178,1896255623)); */
//重载 overload 不要加{} 直接 ;
/* function sayHello(name: string): string;
function sayHello(name: string,age: number): string;
function sayHello(name: any,age?: any): string{
    if(age){
        return `my name is ${name}, age is ${age}`;
    }else{
        return `my name is ${name}`;
    }
} */
function sayHello(name, age) {
    if (age) {
        return "my name is " + name + ", age is " + age;
    }
    else {
        return "my name is " + name;
    }
}
console.log(sayHello('lisi'));
console.log(sayHello('zs', 22));
