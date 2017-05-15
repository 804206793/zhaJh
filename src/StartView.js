
var StartView = (function(_super) {

    function StartView() {
        StartView.super(this);

        this.dlg;
        this.reg;
    }

    //注册类
    Laya.class(StartView, "StartView", _super);

    StartView.prototype.init = function() {
        this.btReg.on(Laya.Event.CLICK, this, this.onButtonReg);
        this.btLogin.on(Laya.Event.CLICK, this, this.onButtonLog);

        this.dlg = new NormalDialog();
        this.reg = new Register();
    }

    StartView.prototype.onButtonReg = function() {
        this.destroy();
        this.reg.popup();
    }

    StartView.prototype.onButtonLog = function() {
        // this.dlg.setContext("暂时无法登录");
        this.destroy();
        Laya.stage.addChild(new Login());
    }

    return StartView;
})(StartUI);

