/**
 * Created by acer1 on 2016/9/10.
 */
function PhoneBookManagemrnt(ini){
    this._phoneBook = ini
}
PhoneBookManagemrnt.prototype = {
    getTel: function(getName){
        var tel = '';
        for(var i = 0; i < getPhoneBook.length; i++){
            if(this._phoneBook[i].name == getName){
                tel = this._phoneBook[i].phone;
                break
            }
        }
        return tel
    },
    addItem: function(getName,getTel){
        this._phoneBook.push({name:getName,phone:getTel})
    },
    removeItem: function(getName){
        for(var i = 0; i < this._phoneBook.length; i++){
            if(this._phoneBook[i].name == getName){
                this._phoneBook.splice(i, 1);
                break
            }
        }
    }
}