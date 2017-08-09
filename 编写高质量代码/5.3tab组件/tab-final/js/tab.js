/**
 * Created by zhangdi on 2016/8/9.
 */
/**
 * Created by zhangdi on 2016/8/9.
 */

var tabs = $(".j-tab");
setTab({
    root : tabs[0],
    currentClass : "tab-currentMenu1",
    handler : function(){alert("haha")}
});
setTab({
    root : tabs[1],
    currentClass : "tab-currentMenu2",
    trigger : "mouseover",
    autoPlay : true
});

function setTab(config){

    var root = config.root;
    var currentClass = config.currentClass;
    var trigger = config.trigger || "click";
    var handler = config.handler;
    var autoPlay = config.autoPlay;
    var playTime = config.playTime || 3000;

    var tabMenus = $(".tab-menu-item",root);

    if(autoPlay){
        setInterval(autoHandler,playTime)
    }

    var currentIndex = 0;

    function autoHandler() {
        currentIndex++;
        if (currentIndex >= tabMenus.length) {
            currentIndex = 0;
        }
        showItem(currentIndex);
    }
    function showItem(currentIndex){
        var tabContent = $(".tab-content-item", root);
        for (var j = 0; j < tabContent.length; j++) {
            tabContent[j].style.display = "none";
        }
        tabContent[currentIndex].style.display = "block";
        /*用this代替i*/
        var currentMenu = $("." + currentClass, root)[0];
        /*类名选择时，注意字符串的拼接*/
        if (currentMenu) {
            $(currentMenu).removeClass(currentClass);
            /*注意加$()，而不是直接上变量currentMenu，也不能用原生js方法调用addClass*/
        }
        $(tabMenus[currentIndex]).addClass(currentClass);
        if (handler) {
            handler(currentMenu[currentIndex])
        }
    }

    for(var i = 0; i < tabMenus.length; i++){
        tabMenus[i]._index = i; /*不能var*/
        tabMenus[i].addEventListener(trigger, function(){
            var tabContent = $(".tab-content-item",root);
            for(var j = 0; j < tabContent.length; j++){
                tabContent[j].style.display = "none";
            }
            tabContent[this._index].style.display = "block";  /*用this代替i*/
            var currentMenu = $("." + currentClass,root)[0];    /*类名选择时，注意字符串的拼接*/
            if(currentMenu){
                $(currentMenu).removeClass(currentClass);   /*注意加$()，而不是直接上变量currentMenu，也不能用原生js方法调用addClass*/
            }
            $(this).addClass(currentClass);
            if(handler){
                handler(this._index)
            }
        });
    }
}

/*
(function(_i){
    tabMenus[_i].onclick = function(){
        var tabContent = $(".tab-content-item",root);
        for(var j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = "none";
        }
        tabContent[_i].style.display = "block";
    }
})(i);*/
