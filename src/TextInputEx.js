
var TextInputEx = (function(_super){

    function TextInputEx() {
        TextInputEx.super(this);

        this.textReset;
        this.colorReset;
        this.italicReset;

        this.on(Laya.Event.FOCUS, this, this.onFocus);
        this.on(Laya.Event.BLUR, this, this.onBlur);
    }

    Laya.class(TextInputEx, "TextInputEx", _super);

    //获取焦点时
    TextInputEx.prototype.onFocus = function() { 

       // 第一次获取焦点的时候, 将编辑模式下设置的属性做一下记录.
        if (!this.textReset) {
            this.textReset = this.text ;
            this.colorReset = this.color ;
            this.italicReset = this.italic ;
        }

        // 判定输入框中内容是否是提示文本.
        if (this.textReset == this.text) {
            this.text = "" ;
            this.color = "#000000" ;
            this.italic = false ;
        }

    }

    //失去焦点时
    TextInputEx.prototype.onBlur = function() { 
        
        if (this.text == "") {
            this.text = this.textReset ;
            this.color = this.colorReset ;
            this.italic = this.italicReset ;
        }
    }

    return TextInputEx;
})(Laya.TextInput);