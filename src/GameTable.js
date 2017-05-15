
var GameTable = (function(_super) {

    function GameTable(data) {
        GameTable.super(this);
        this.hr;
        //游戏桌标识
        this.num = data.table.num;
        this.type = data.table.type;
        //根据席位容器在父节点中的位置设置
        this.sNum = 3 ;
        this.eNum = 7;

        this.arr =[];
        this.cardMap = {};

        this.timeLine_100;

        
        this.angle;
       
        this.xPos;
        this.yPos;
    
        
       

    }
    Laya.class(GameTable, "GameTable", _super);
   
    GameTable.prototype.init = function (){
      //创建卡片对应关系
      this.cardMap['1'] = "heart";
      this.cardMap['2'] = "diamond";
      this.cardMap['3'] = "club";
      this.cardMap['4'] = "_spade";

      //将玩家容器属性设为true 表示已入座 
      this._childs[2].isSeat = true;
      this.arr.push(parseInt(Config.playerId));
      this.player3Name.text = JSON.parse(Config.player).phone;
      Laya.timer.loop(5000, this, this.connect);
    //   this.connect();
    }
   

    GameTable.prototype.connect = function() {
        //this.num="201705091Tu5j2";
        var param ='type='+this.type+'&num='+this.num+'&token='+Config.playerToken;
        hr = new Laya.HttpRequest();
        hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
		hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
		hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
		hr.send('http://localhost:8080/client/player/ajax/current/table?'+param, null, 'get', 'json');
    }


	GameTable.prototype.onHttpRequestComplete = function(data) {
        //遍历玩家并将玩家入座
        if(data.table.playerList.length > 1){

            for(var index in data.table.playerList){
                var pla = data.table.playerList[index];
                var result = this.arr.some(function(item,i,array){
                    return(item == pla.id);
                })       
                //为玩家发牌
                if(Config.playerId == pla.id&&data.table.start){  
        
                        var _arr = pla.handCards.cards;
                        for(var _i in _arr ){
                            var key = _arr[_i].flowerType
                            var number = _arr[_i].number;
                            var imagUrl = "comp/"+ this.cardMap[key]+number+".png";  
                            var sprite = new Laya.Sprite();
                            //已经加载过的资源会自动存在缓存中
                            var res = Laya.Loader.getRes(imagUrl);
                            //定义卡牌的尺寸大小
                            res.height = 181;
                            res.width = 116;
                            sprite.graphics.drawTexture(res);
                            switch(_i){
                                case "0":
                                this.addCard(this.card1,sprite);
                                break;
                                case "1":
                                this.addCard(this.card2,sprite);
                                break;
                                case "2":
                                this.addCard(this.card3,sprite);
                                break;
                            }
                        }
                    continue;
                }
                // 如过存在新加入的玩家 则为其分配座位，否则继续遍历
                if(result){
                     continue;
                }
                for(var i =  this.sNum,end =this.eNum;i<end;i++){
                     var box = this._childs[i];
                    if(typeof(this._childs[i].isSeat)== "undefined"){
                        //新加入房间玩家入座并修改相关信息
                        box.isSeat = true;
                        box._childs[2].text = pla.phone;
                       //匹配席位入场动画
                        switch(box.name){
                            case "box1":
                             this.seatAni1.play(0,false);
                             box.seatNum = "seat1";
                            break;
                            case "box2":
                             this.seatAni2.play(0,false);
                             box.seatNum = "seat2";
                            break;
                            case "box3":
                             this.seatAni3.play(0,false);
                             box.seatNum = "seat3";
                            break;
                            case "box4":
                             this.seatAni4.play(0,false);
                             box.seatNum = "seat4";
                            break;
                        }
                         //将进入房间的玩家ID放入数组
                        this.arr.push( data.table.playerList[index].id);
                        break;
                    }
                }
            } 
        }
          //延迟2秒执行后发牌动画
        if(data.table.start){
            Laya.timer.once(2000, this,this.playDealAni);
            this.cardBox.on(Laya.Event.CLICK,this,this.cardClick);
            Laya.timer.once(3000, this,this.playMenuAni);
        }
       
    
	}

    GameTable.prototype.addCard = function(box,node){     
         box.removeChildAt(0);
         box.addChild(node);  
    }

    GameTable.prototype.playDealAni = function(){
        //玩家动画
        this.deal3.play(0,false);
        var chip = this.createChip("chip100",140,865);
        this.addTime(chip,this.timeLine_100);
        //其余玩家动画
        for(var i = this.sNum,end =this.eNum;i<end;i++){
            var box = this._childs[i];
            if(box.isSeat){
                    switch(box.seatNum){
                        case "seat1":
                            this.dealAni1.play(0,false);
                        break;
                        case "seat2":
                            this.dealAni2.play(0,false);
                            var chip = this.createChip("chip100",-320,350);
                            this.addTime(chip,this.timeLine_100);
                        break;
                        case "seat3":
                            this.dealAni3.play(0,false);
                        break;
                        case "seat4":
                            this.dealAni4.play(0,false);
                        break;
                    }
            }   

        }
    }

    GameTable.prototype.playMenuAni = function(){
       this.menuAni.play(0,false);
    }

    //看牌点击事件
    GameTable.prototype.cardClick = function(){
       this.cardAni.play(0,false);


    //    var tLine = new laya.utils.TimeLine();
    //    tLine.to(this.testBox,{},1000);
    //    tLine.play(0,false);
     
        //TODO
    }

    GameTable.prototype.addTime = function(chip,timeLine){
       
       var xPos_end = (this.chipBox.width - chip.width/2)*Math.random();
       var yPos_end = (this.chipBox.height - chip.height/2)*Math.random();

       this.angle = 1440*Math.random();
       var xA = -this.angle;
       var yA =  this.angle;

       timeLine=new laya.utils.TimeLine();
       timeLine.on(Laya.Event.LABEL,this,this.onLabel);
       timeLine.addLabel("A",0).to(chip,{x:chip.x,y:chip.y},0)
       .addLabel("B",0).to(chip,{x:chip.x,y:chip.y,skewX:0,skewY:0,visible:"true"},100)
       .addLabel("C",0).to(chip,{x:xPos_end,y:yPos_end,skewX:xA,skewY:yA,visible:"true"},500);

       timeLine.once(Laya.Event.COMPLETE,this,this.aniComplete,[chip,timeLine]);
       timeLine.play(0,false);


    }
    //监听Label事件
     GameTable.prototype.onLabel = function(label){
         if(label == "C"){

         }
     }

     GameTable.prototype.aniComplete = function(chip,timeLine){
        timeLine.destroy();
        console.log(chip.x);
        console.log(chip.y);
     
     }

     /**
      * 
      * @param type 筹码类型
      * @param xPos 
      * @param yPos
      * @return 
      */
    GameTable.prototype.createChip = function(type,xPos,yPos){
        var res ;
        switch(type){
            case "chip100":
            res =Laya.Loader.getRes("comp/100.png");
            break;
            case "chip1K":
            res =Laya.Loader.getRes("comp/1K.png")
            break;
        }
        var sprite = new Laya.Sprite();
        sprite.graphics.drawTexture(res);
        //设置精灵大小
        sprite.width = res._w;
        sprite.height = res._h;
        //设置精灵旋转中心点
        sprite.pivotX = res._w/2;
        sprite.pivotY = res._h/2;
        //设置精灵位置
        sprite.x = xPos;
        sprite.y = yPos;    
        this.chipBox.addChild(sprite);
        return sprite;
    }














    GameTable.prototype.onHttpRequestProgress = function(e) {
	
		console.log(e);
	}

    GameTable.prototype.onHttpRequestError = function(e) {
        console.log(e);
	}

    return GameTable;
})(GameTableUI);