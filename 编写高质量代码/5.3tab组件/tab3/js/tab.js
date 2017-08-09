/**
 * Created by zhangdi on 2016/8/9.
 */
/**
 * Created by zhangdi on 2016/8/9.
 */

var tabs = $(".j-tab");

function setTab(root, currentClass, trigger, handler, autoPlay, playTime){
    var tabMenus = $(".tab-menu-item",root);
    trigger = trigger || "click";
    playTime = playTime || 3000;
    if(autoPlay){
        setInterval(autoHandler,playTime)
    }
    var currentIndex = 0;
    function autoHandler(){
        currentIndex++;
        if(currentIndex >= tabMenus.length){
            currentIndex = 0;
        }
        var tabContent = $(".tab-content-item",root);
        for(var j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = "none";
        }
        tabContent[currentIndex].style.display = "block";  /*用this代替i*/
        var currentMenu = $("." + currentClass,root)[0];    /*类名选择时，注意字符串的拼接*/
        if(currentMenu){
            $(currentMenu).removeClass(currentClass);   /*注意加$()，而不是直接上变量currentMenu，也不能用原生js方法调用addClass*/
        }
        $(tabMenus[currentIndex]).addClass(currentClass);
        if(handler){
            handler(currentMenu[currentIndex])
        }
    }
    for(var i = 0; i < tabMenus.length; i++){
        tabMenus[i]._index = i; /*不能var*/
        tabMenus[i].addEventListener(trigger, function(){
            {
                var tabContent = $(".tab-content-item",root);
                for(var j = 0; j < tabContent.length; j++){
                    tabContent[j].style.display = "none";
                }
                tabContent[this._index].style.display = "block";  /*用this代替i*/
                var currentMenu = $("." + currentClass,root)[0];    /*类名选择时，注意字符串的拼接*/
                if(currentMenu){
                    $(currentMenu).removeClass(currentClass);   /*注意加$()，而不是直接上变量currentMenu，也不能用原生js方法调用addClass*/
                }
                $(this).addClass(currentClass)
            }
            if(handler){
                handler(this._index)
            }
        });
    }
}
setTab(tabs[0],"click");
setTab(tabs[1],"tab-currentMenu2","mouseover",null,true);







/*
(function(_i){
    tabMenus[i].onclick = function(){
        var tabContent = $(".tab-content-item",root);
        for(var j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = "none";
        }
        tabContent[_i].style.display = "block";
    }
})(i);*/
