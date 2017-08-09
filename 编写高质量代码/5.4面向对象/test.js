/**
 * Created by acer1 on 2016/9/10.
 */
function Animal(name){
    this.name = name;
    this.type = "animal";
    this.hh = function(){
        alert(this.name)
    }
}
Animal.prototype = {
    say: function(){
        alert("i'm a(an) " + this.type + ", my name is " + this.name)
    }
};
function Bird(name){
    Animal.call(this,name)
}
Bird.prototype = new Animal();
Bird.prototype.fly = function(){
    alert("i'm flying!")
};
var myBird = new Bird("zhang");
myBird.hh();
myBird.say();
myBird.fly();
/*
var myDog = new Animal("wang");
myDog.fly();*/
