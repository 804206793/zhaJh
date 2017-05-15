
var RoomSelect = (function(_super) {
    function RoomSelect() {
        RoomSelect.super(this);
        this.btCommoner;
        this.hr;
        this.gameTable;
      
    }
    Laya.class(RoomSelect, "RoomSelect", _super);

     RoomSelect.prototype.init = function() {
        this.btCommoner.on(Laya.Event.CLICK, this, this.onButtonRoom);
        this.dlg = new NormalDialog();
        this.reg = new Register();
    }


    RoomSelect.prototype.onButtonRoom = function(){
        this.connect();
    }

    RoomSelect.prototype.connect = function() {
        var param = 'token='+Config.playerToken+'&uid='+Config.playerId+'&type=1';
        hr = new Laya.HttpRequest();
        hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
		hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
		hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
		hr.send('http://localhost:8080/client/player/insertDesk?'+param, null, 'get', 'json');
    }

	 RoomSelect.prototype.onHttpRequestComplete = function(data) {
          console.log(data);
        this.destroy();
        gameTable = new GameTable(data);
       
        gameTable.init();
        Laya.stage.addChild(gameTable);
    
	}

      RoomSelect.prototype.onHttpRequestProgress = function(e) {
	
		console.log(e);
	}

	 RoomSelect.prototype.onHttpRequestError = function(e) {
        console.log(e);
	}

 
    return RoomSelect;
})(RoomUI);