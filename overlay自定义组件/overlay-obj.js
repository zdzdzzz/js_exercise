(function () {

    function OverLay(width){
        this.width = width ? width : 150;
    }
//用户可以访问到show,但我们希望只暴露init和hide方法
    OverLay.prototype = {
        init : function(){
            if($("#overlay").length === 0){
                this.show();
            }
        },
        show : function(){
            var shelter = document.createElement("div");
            shelter.id = "overlay";
            shelter.style.zIndex = "9999";
            shelter.style.position = "absolute";
            shelter.style.left = 0;
            shelter.style.top = 0;
            shelter.style.right = 0;
            shelter.style.bottom = 0;

            var container = document.createElement("div");
            container.style.margin = "0 auto";
            container.style.top = "50%";
            container.style.transform = "translateY(-50%)";
            container.style.borderRadius = "50%";
            container.style.position = "relative";

            container.style.width = this.width + "px";

            shelter.appendChild(container);

            var img = document.createElement("img");
            img.src = "bantouming.gif";
            img.style.width = "100%";

            container.appendChild(img);

            $("body").append(shelter);
        },
        hide : function(){
            $("#overlay").hide();
        }
    };

    window.overlay = new OverLay();
})(jQuery);

