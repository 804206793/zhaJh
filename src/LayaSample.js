
var LayaSample = (function() {

    (function() {
        //初始化引擎
        Laya.init(1080, 1920);
        //改变舞台颜色
        Laya.stage.bgColor = "ffffff";
        //缩放模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        //设置横竖屏
        // Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;

        //加载资源
        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onLoaded), null, Laya.Loader.ATLAS);
    })();

    function onLoaded() {
        
        var start = new StartView();
        start.init();
        Laya.stage.addChild(start);
    } 
})();


