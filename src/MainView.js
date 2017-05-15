
var MainView = (function(_super) {

    function MainView() {
        MainView.super(this);
        this.btClassical.on(Laya.Event.CLICK, this, this.onButton_Classical);
    }
    Laya.class(MainView, "MainView", _super);

    var _proto_ = MainView.prototype;

    _proto_.onButton_Classical = function() {
        this.destroy();
        var roomSelect = new RoomSelect();
        roomSelect.init();
        Laya.stage.addChild(roomSelect);
    }

    return MainView;
})(MainUI);