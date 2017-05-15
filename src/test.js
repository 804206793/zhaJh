var Test = (function () {
    
    var Stage   = Laya.Stage;
	var Text    = Laya.Text;
	var Browser = Laya.Browser;
	var WebGL   = Laya.WebGL;

	var rotateTimeBasedText, rotateFrameRateBasedText;


    (function () {
        //初始化引擎
        Laya.init(1080, 1920);
        //改变舞台颜色
        Laya.stage.bgColor = "#232628";
        //缩放模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        //设置横竖屏
        // Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;


        // Laya.timer.frameLoop(2, this, testPie);

        setup();
    })();

    var sprite = new Laya.Sprite();
    var r = 300;
    var fa = -90;
    var la = 270;
    function testPie() {
        sprite.graphics.clear();
        if (fa < la) {
            fa += 1;
        } else {
            fa = -90;
            fa += 1;
        }

        //x: number, y: number, radius: number, startAngle: number, endAngle: number, fillColor: any, lineColor?: any, lineWidth?: number
        sprite.graphics.drawPie(Laya.stage.width / 2, Laya.stage.height / 2, r, fa, 180, "#000000", "#ffffff");
        Laya.stage.addChild(sprite);


    }



    function setup()
	{
         var bg = new Laya.Sprite();
        bg.graphics.drawPie(500, 500, -90, 180, 300, "#000000", "#ffffff");

        Laya.stage.addChild(bg);
		// var vGap = 200;

		// rotateTimeBasedText = createText("基于时间旋转", Laya.stage.width / 2, (Laya.stage.height - vGap) / 2);
		// rotateFrameRateBasedText = createText("基于帧频旋转", rotateTimeBasedText.x, rotateTimeBasedText.y + vGap);

		// Laya.timer.loop(200, this, animateTimeBased);
		// Laya.timer.frameLoop(2, this, animateFrameRateBased);
	}

	function createText(text, x, y)
	{
		var t = new Text();
		t.text = text;
		t.fontSize = 30;
		t.color = "white";
		t.bold = true;
		t.pivot(t.width / 2, t.height / 2);
		t.pos(x, y);
		Laya.stage.addChild(t);

		return t;
	}

	function animateTimeBased()
	{
		rotateTimeBasedText.rotation += 1;
	}

	function animateFrameRateBased()
	{
		rotateFrameRateBasedText.rotation += 1;
	}

})();
