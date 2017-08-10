(function () {

    var Overlay = (function(){
        function GetOverlay(width){

        }

        function create(width, top, left){
            var shelter = document.createElement("div");
            shelter.id = "overlay";
            shelter.style.zIndex = "9999";
            shelter.style.position = "absolute";
            shelter.style.left = 0;
            shelter.style.top = 0;
            shelter.style.right = 0;
            shelter.style.bottom = 0;

            var container = document.createElement("div");
            container.style.transform = "translate(-50%,-50%)";
            container.style.borderRadius = "50%";
            container.style.position = "relative";

            container.style.width = width + "px";
            container.style.top =  top + "%";
            container.style.left = left + "%";

            shelter.appendChild(container);

            var img = document.createElement("img");
            img.src = "bantouming.gif";
            img.style.width = "100%";

            container.appendChild(img);

            $("body").append(shelter);
        }

        GetOverlay.prototype = {
            show : function(width, top, left){
                var overlayModal = $("#overlay");
                var widthLay = width ? width : 150;
                var topLay = top ? top : 50;
                var leftLay = left ? left : 50;
                if(overlayModal.length === 0){
                    create(widthLay, topLay, leftLay);
                }else{
                    overlayModal.children("div")[0].style.width = widthLay + "px";
                    overlayModal.children("div")[0].style.top = topLay + "%";
                    overlayModal.children("div")[0].style.left = leftLay + "%";
                }
            },

            hide : function(){
                $("#overlay").hide();
            }
        };

        return new GetOverlay()
    })();

    window.overlay = Overlay;
})(jQuery);

