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
Bird.prototype = {

};
var myBird = new Bird("zhang");
myBird.type;    /*animal*/
myBird.say();   /*is not a function;因为原型没有继承*/