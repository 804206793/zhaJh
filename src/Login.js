
var Login = (function(_super) {
    function Login() {
        Login.super(this);

        this.btBack.on(Laya.Event.CLICK, this, this.onButton_Back);
        this.btLogin.on(Laya.Event.CLICK, this, this.onButton_Login);
        
    }
    Laya.class(Login, "Login", _super);

    var _proto_ = Login.prototype;

    _proto_.onButton_Back = function() {
        this.destroy();
        var start = new StartView();
        start.init();
        Laya.stage.addChild(start);
    }

    _proto_.onButton_Login = function() {
        // this.destroy();
        // Laya.stage.addChild(new MainView());
        
       // 发送到服务器的数据
        var param = 'phone=' + this.ctUsername.text + '&password=' + this.ctPassword.text;
        this.connect(param);
    }

    var hr;
    _proto_.connect = function(param) {
        hr = new Laya.HttpRequest();
        hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
		hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
		hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
		hr.send('http://localhost:8080/client/player/login', param, 'post', 'json');
    }

     _proto_.onHttpRequestProgress = function(e) {
	
		console.log(e);
	}

	 _proto_.onHttpRequestComplete = function(data) {  
         if(hr.data.success){   
             Config.player =data.object.player;
            this.destroy();
            Config.playerId = JSON.parse(data.object.player).id;
            Config.playerToken = data.object.token;
            var main = new MainView();
            Laya.stage.addChild(main);
         }
	}

	 _proto_.onHttpRequestError = function(e) {

	    console.log(e);
	}

    return Login;
})(LoginUI);