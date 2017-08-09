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
function Bird(name){
    Animal(name);    /*类似于调用Animal函数，this指向window；想改变指向用call或apply*/
}
Bird.prototype = {

};
var myBird = new Bird("zhang");
myBird.type;    /*undefined*/
myBird.say();    /*is not a function;因为原型没有继承*/