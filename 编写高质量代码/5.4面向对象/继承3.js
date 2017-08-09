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
    Animal.call(this,name)
}
Bird.prototype = Animal.prototype;      /*污染animal原型的属性及方法，因为函数按指针传递*/
Bird.prototype.fly = function(){
    alert("i'm flying!")
};
var myBird = new Bird("zhang");
myBird.say();
myBird.fly();
var myDog = new Animal("wang");
myDog.fly();



