	var TextArea = function(config) {
	    var that = this;
	    that.maxlength = config.maxlength;
	    that.text = config.content;
	    that.yes = config.yes;

	    var maxlength = that.maxlength;
	    var $root = $('<div class="bg"></div>').appendTo('body');
	    var $text_bg = $('<div class="text_bg"></div>').appendTo($root);
	    var $textarea = $('<textarea class="textarea" name="" autofocus="autofocus" maxlength="' + maxlength + '">' + that.text + '</textarea>').appendTo($text_bg);
	    var $text_bottom = $('<div class="text_bottom"></div>').appendTo($text_bg);

	    var $text = $textarea.val();
	    var $cancle = $('<button class="cancle l">取消</button>').appendTo($text_bottom);
	    var $number = $('<span class="text_number"><span class="surplus">' + (that.text.length) + '</span>/<span class="total">' + maxlength + '</span></span>').appendTo($text_bottom);
	    var $ok = $('<button class="ok r">确定</button>').appendTo($text_bottom);

	    $textarea.on('keyup', function() {
	        var text = $(this).val();
	        $number.find('.surplus').text(text.length);
	    })
	    $cancle.on('click', function() {
	        that.close()
	    })

	    $ok.on('click', function() {
	        that.yes(that);
	    })
	    that.close=function () {
	    	$root.remove();
	    }

	}