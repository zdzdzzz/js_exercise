/**
 * Created by acer1 on 2016/9/10.
 */
function Animal(name){
    this.name = name;
    this.type = "animal";
}
Animal.prototype = {
    say: function(){
        alert("i'm a(an) " + this.type + ", my name is " + this.name)
    }
};
function Bird(name){            /*可以用到Animal的属性和方法，有下面的new后可以去掉*/
    Animal.call(this,name)
}
Bird.prototype = new Animal();          /*可以用到Animal及其原型链上的属性和方法*/
Bird.prototype.constructor = Bird;      /*如果没有的话所有的构造函数均继承自object*/
Bird.prototype.fly = function(){
    alert("i'm flying!")
};
var myBird = new Bird("zhang");
alert(myBird.name);
myBird.say();
myBird.fly();
var myDog = new Animal("wang");
myDog.fly();

/*内存占用情况
数据是否共享，或子类只共享部分数据*/

