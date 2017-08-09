/**
 * Created by acer1 on 2016/9/10.
 */
function Animal(name){
    this.name = name;
    this.type = "animal";
    var age = 20;
    var move = function(){
        alert("it is moving!")
    };
    this.say = function(){
        alert("i'm a(an) " + this.type + ", my name is " + this.name + ", i'm " + age)
    };
    this.act = function(){
        move()
    }
}
Animal.prototype = {

};
var myDog = new Animal("zhang");
myDog.say();
myDog.act();