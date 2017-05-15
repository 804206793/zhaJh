
var NormalDialog = (function(_super) {

    function NormalDialog() {
        NormalDialog.super(this);
    }

    Laya.class(NormalDialog, "NormalDialog", _super);

    //设置显示文本
    NormalDialog.prototype.setContext = function(context) {
        this.txContext.text = context;
        this.popup();
    }

    return NormalDialog;
})(NormalDialogUI);