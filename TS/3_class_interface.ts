//1.对象与类
/* 什么是对象？  everything is object！
   什么是类？    是对一类对象的抽象。
   什么时候需要定义类？*/
//定义类
class Person {
    name: string;  //属性 不写默认是public
    private age: number = 18;  //私有类 可以不赋初值，通过传参也可以
    private _gender: string = "female";
    //只读
    readonly height: string = '180cm';
    //静态
    static legs: number = 2;

    constructor(name: string){ //构造函数
       this.name = name; 
    }
    public say():string{ //方法
        return 'hello';
    }
    growUp(): void{
       
        this.age++;
        console.log(`年龄：` + this.age);        
    }
    getAge(message: string): number{
        if(message == 'I love you'){
            return this.age;
        }else{
            throw new Error('就不告诉你');
        }
        
    }
    setAge(age: number): void{
        if(age > 100){
            throw new Error('想活多久');    
        }
        this.age = age;
    }

    get gender(): string{
        return this._gender;
    }
    set gender(gender: string){
        if(gender == 'male'|| gender =="female"){
            this._gender = gender;            
        }else{
            throw new Error('你是外星来的吗？？');
        } 
        
    }
}
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
class TheWhite extends Person{
    country: string; //可以赋初值
    constructor(name: string, country: string){
        super(name);  //由super来
        this.country = country;
    }
    //子类中方法重写
    say(): string{
        return `hello, my name is: ${this.name},I am from ${this.country}`;
    }
}
var p3 = new TheWhite('john','UK');
// console.log(p3.name);
// console.log(p3.country);
// console.log(p3.getAge('I love you'));
// console.log(TheWhite.legs);  //静态也继承了
// console.log(p3.say());//会调用重写的方法


//抽象类
abstract class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract shout(): string;
}
// var a1 = new Animal();  //报错：抽象的不能new，new是new一个具体的
//抽象都是被用来做继承的

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    shout(): string {
        return '汪汪';
    }   
}
class Cat1 extends Animal{
    constructor(name: string){
        super(name);
    }
    shout(): string {
        return `我的名字叫${this.name},喵喵`;
    }   
}
// var dog1 = new Dog('旺财');
// console.log(dog1.name);
// console.log(dog1.shout());

class Monkey extends Animal{
    constructor(name: string) {
        super(name);       
    }
    shout(): string {
        return `我的名字叫${this.name},喳喳`;
    }
    
}
//接口
//什么时候用接口？？
interface IFly{
    fly():string;
}
class MonkeyKing extends Monkey implements IFly{
    constructor(name: string) {
        super(name);        
    } 
    fly(): string {
        return '我可以架筋斗云飞';
    }
    magic(): string{
        return `我可以使用毫毛变东西`;
    }  
}
class MachineCat extends Cat1 implements IFly{
    constructor(name: string) {
        super(name);  
    }
    fly(): string {
        return '我可以头插小风扇飞';
    }
    magic(): string{
        return `我可以使用口袋变东西`;
    } 
}
class SuperMan extends Person implements IFly{
    constructor(name: string) {
        super(name);  
    }
    fly(): string {
        return `我是${this.name}我可以举起双手飞`;
    }
} 
var wukong: MonkeyKing = new MonkeyKing('孙悟空');
console.log(wukong.name);
console.log(wukong.shout());
console.log(wukong.magic());
console.log(wukong.fly());
var doraamon: MachineCat = new MachineCat('哆啦A梦');
console.log(doraamon.shout());
console.log(doraamon.magic());
console.log(doraamon.fly());

var superman: SuperMan = new SuperMan('卡尔'); 
console.log(superman.say());
console.log(superman.fly());


//类类型接口
interface IAnimal{  //可以多接口
    name: string;
    shout(): string;
}
class Dogg implements IAnimal{
    name: string;
    constructor(name:string){
        this.name =name;
    }
    shout(): string{
        return '我又汪汪叫了。。。';
    }
}

var dog2 = new Dogg('大黄');
console.log(dog2.name);
console.log(dog2.shout());


//属性类型接口     作用就是约束函数传过去的参数符合接口的约束
interface IPerson{
    name: string;
    age: number;
}

function checkPersonInFo(person: IPerson): void{  //接口类型参数person: IPerson)
    console.log(person.name,person.age);     
}
checkPersonInFo(    {name: 'xiaoming',age: 12}    );
//checkPersonInFo( {name: 'xiaoming',age: 12, gender: 'male'} ); //报错
//checkPersonInFo(  {name: 'xiaoming'}  );//报错
// var obj = {name: 'xiaoming', age: 12, gender: 'male'};
//var obj = {name: 'xiaoming'};  //少一个下面就报错了
// checkPersonInFo(obj);

//函数类型接口  作用：声明的函数必须按照接口约束来
interface IMath {
    (a: number, b: number): number;
}
var add: IMath = function(x: number, y: number): number{
    return x + y;
}
console.log(add(2,6));
