
var RegisterOK = (function(_super) {

    function RegisterOK() {
        RegisterOK.super(this);

        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        this.btOK.on(Laya.Event.CLICK, this, this.onButton_OK);
    }
    Laya.class(RegisterOK, "RegisterOK", _super);

    var _proto_ = RegisterOK.prototype;

    _proto_.onButton_OK = function() {
    
    }

    return RegisterOK;
})(RegisterOKUI);