$.getJSON("http.json", function(res) {
    //音乐
    var audio_url=res["audio"]||"audio/1.mp3";
    $("#music_box").children("audio").attr("src",audio_url);
    
    //图片
    var pic_arrys=res["bg_pic"];
    var $picNodes="";
    for (var i = 0; i < pic_arrys.length; i++) {
        $picNodes+='<div class="page p1" style="background: url('+pic_arrys[i]+') no-repeat ;background-size: 100% 100%;"></div>';
    }
    $("#pages").prepend($($picNodes));
    //生成翻页特效
    var a = new pageSwitch('pages', {
        duration: 1000,
        start: 0,
        direction: 1,
        loop: true,
        ease: 'ease',
        transition: "flip3d",
        freeze: false,
        mouse: true,
        mousewheel: true,
        arrowkey: true
    });
    // var $form=$('<div id="form_box"></div>').appendTo($);

    $("#submit").on("click",function () {
        var username=$("input[name=username]").val(),
        phone=$("input[name=phone]").val(),
        data={
            username:username,
            phone:phone
        }
        $.ajax({
            url:res["goal"],
            data:data,
            success:function (res) {
                
            }
        })
    })








    //音乐事件处理
    $("#music_box").on("click", function() {
        var audio = $(this).children("audio").get(0);
        if (audio.paused) {
            audio.play();
            $(this).css("animation", "rota 2s linear infinite")
        } else {
            audio.pause();
            $(this).css("animation", "null")
        }
    })
})