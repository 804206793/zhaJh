
var Register = (function(_super) {
    function Register() {
        Register.super(this);

        this.btSubmit.on(Laya.Event.CLICK, this, this.onButtonSubmit);
        this.btBack.on(Laya.Event.CLICK, this, this.onButton_Back);
    }
    Laya.class(Register, "Register", _super);


    var _proto_ = Register.prototype;

    _proto_.onButtonSubmit = function() {

        var param = 'phone=' + this.ctUsername.text + '&password=' + this.ctPassword.text + '&code=' + this.ctIdenty.text + '&type=2';
        this.connect(param);
    }

    _proto_.onButton_Back = function() {
        this.close();
        var start = new StartView();
        start.init();
        Laya.stage.addChild(start);
    }

    var hr,logger;
    _proto_.connect = function(param) {
        hr = new Laya.HttpRequest();
        hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
		hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
		hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
		hr.send('http://localhost:8080/client/player/register', param, 'post', 'text');
    }

     _proto_.onHttpRequestProgress = function(e) {
	
		console.log(e);
	}

	 _proto_.onHttpRequestComplete = function(e) {
        
        var login = new Login();
        Laya.stage.addChild(login);
        this.close();
        var ok = new RegisterOK();
        ok.popup();
		console.log(e)
	}

	 _proto_.onHttpRequestError = function(e) {

		logger.text += "收到数据：" + hr.data;
	}

    return Register;
})(RegisterUI);