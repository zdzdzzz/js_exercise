/**
 * Created by zhangdi on 2016/8/9.
 */
var tabMenus = document.getElementById("tab-menu").getElementsByTagName("li");
var tabContent = document.getElementById("tab-content").getElementsByTagName("div");

for(var i = 0; i < tabMenus; i++){
    tabMenus[i].onclick = function(){
        alert(i);
        for(var j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = "none"
        }
        tabContent[i].style.display = "block"
    }
}