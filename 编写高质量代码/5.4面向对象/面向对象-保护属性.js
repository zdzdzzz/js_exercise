/**
 * Created by acer1 on 2016/9/10.
 */
function Animal(name){
    var name;
    var type = "animal";
    var _age = 20;
    this.getName = function(){
        return name
    };
    this.setName = function(o){
        if(o != "zhang" && o != "wang"){
            alert("你设置的name不合要求")
            return
        }
        name = o
    };
    this.getType = function(){
        return type
    };
    this.setType =  function(o){
        alert("type不可设置")
    };
    this._getAge = function(){
        return age
    };
    this.setAge =  function(o){
        _age = o
    };
}
Animal.prototype = {
    _move: function(){
        alert("it is moving!")
    },
    say:  function(){
        alert("i'm a(an) " + this.getType() + ", my name is " + this.getName() + ", i'm " + this._getAge())
    },
};
var myDog = new Animal("zhang");
myDog.say();
myDog.act();