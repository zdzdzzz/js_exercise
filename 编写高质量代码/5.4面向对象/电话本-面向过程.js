/**
 * Created by acer1 on 2016/9/9.
 */
/*var phonebook = {
    {name:'zhang',phone:'11111'},
    {name:'zhang',phone:'11111'}
}*/

var phonebook = [
    {name:'zhang',phone:'11111'},{name:'li',phone:'22222'},{name:'wang',phone:'33333'},{name:'zhou',phone:'11111'}
];
var phonebook2 = [
    {name:'ha',phone:'66666'},{name:'da',phone:'77777'},{name:'la',phone:'88888'}
];
function getTel(getPhoneBook,getName){
    var tel = '';
    for(var i = 0; i < getPhoneBook.length; i++){
        if(getPhoneBook[i].name == getName){
            tel = getPhoneBook[i].phone;
            break
        }
    }
    return tel
}
function addItem(getPhoneBook,getName,getTel){
    getPhoneBook.push({name:getName,phone:getTel})
}
function removeItem(getPhoneBook,getName){
    for(var i = 0; i < getPhoneBook.length; i++){
        if(getPhoneBook[i].name == getName){
            getPhoneBook.splice(i, 1)
            break
        }
    }
}