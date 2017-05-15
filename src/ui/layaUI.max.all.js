var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameTableUI=(function(_super){
		function GameTableUI(){
			
		    this.deal3=null;
		    this.seatAni1=null;
		    this.seatAni2=null;
		    this.seatAni4=null;
		    this.seatAni5=null;
		    this.cardAni=null;
		    this.menuAni=null;
		    this.dealAni2=null;
		    this.ani10=null;
		    this.gameTable=null;
		    this.btDown=null;
		    this.box3=null;
		    this.player3=null;
		    this.player3Name=null;
		    this.player3Golden=null;
		    this.box2=null;
		    this.player2=null;
		    this.player2Name=null;
		    this.player2Golden=null;
		    this.box4=null;
		    this.player4=null;
		    this.player4Icon=null;
		    this.player4Name=null;
		    this.player4Golden=null;
		    this.box1=null;
		    this.player1=null;
		    this.player1Icon=null;
		    this.player1Name=null;
		    this.player1Golden=null;
		    this.box5=null;
		    this.player5=null;
		    this.player5Icon=null;
		    this.player5Name=null;
		    this.player5Golden=null;
		    this.menu=null;
		    this.card1=null;
		    this.card2=null;
		    this.card3=null;
		    this.cardBox=null;
		    this.seat2Card1=null;
		    this.seat2Card2=null;
		    this.seat2Card3=null;
		    this.chipBox=null;

			GameTableUI.__super.call(this);
		}

		CLASS$(GameTableUI,'ui.GameTableUI',_super);
		var __proto__=GameTableUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameTableUI.uiView);
		}

		STATICATTR$(GameTableUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"y":0,"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1080,"var":"gameTable","skin":"comp/bgmain.jpg","height":1920}},{"type":"Button","props":{"y":30,"x":30,"width":100,"var":"btDown","stateNum":"1","skin":"comp/btn_down1.png","name":"btDown","height":100}},{"type":"Box","props":{"y":1372,"x":457,"width":165,"var":"box3","name":"box3","height":236},"child":[{"type":"Image","props":{"y":0,"x":-1,"width":165,"var":"player3","skin":"comp/bg4.png","pivotX":-5.684341886080802e-14,"height":236}},{"type":"Label","props":{"y":10,"x":2,"width":160,"var":"player3Name","text":"昵称","overflow":"hidden","height":50,"fontSize":42,"color":"#c1f6ee","align":"center"}},{"type":"Label","props":{"y":184,"x":4,"width":160,"var":"player3Golden","text":"30万","overflow":"hidden","height":50,"fontSize":34,"color":"#c1f6ee","align":"center"}},{"type":"Image","props":{"y":64,"x":22,"width":120,"skin":"comp/profile1 (2).jpg","height":120}},{"type":"Sprite","props":{"y":1,"x":-25,"width":200,"renderType":"mask","height":224},"child":[{"type":"Pie","props":{"y":92,"x":96,"startAngle":0,"radius":200,"lineWidth":1,"fillColor":"#ff0000","endAngle":360},"compId":161}]}]},{"type":"Box","props":{"y":894,"x":-182,"width":165,"var":"box2","name":"box2","height":236},"compId":17,"child":[{"type":"Image","props":{"x":-5.684341886080802e-14,"width":165,"var":"player2","skin":"comp/bg4.png","pivotX":-5.684341886080802e-14,"height":236}},{"type":"Label","props":{"y":10,"x":2,"width":160,"var":"player2Name","text":"昵称","overflow":"hidden","height":50,"fontSize":42,"color":"#c1f6ee","align":"center"}},{"type":"Label","props":{"y":184,"x":4,"width":160,"var":"player2Golden","text":"30万","overflow":"hidden","height":50,"fontSize":34,"color":"#c1f6ee","align":"center"}},{"type":"Image","props":{"y":58,"x":22,"width":120,"skin":"comp/profile1 (1).jpg","height":120}}]},{"type":"Box","props":{"y":894,"x":1096,"width":165,"var":"box4","name":"box4","height":236},"compId":22,"child":[{"type":"Image","props":{"y":-2,"x":0,"width":165,"var":"player4","skin":"comp/bg4.png","pivotX":-5.684341886080802e-14,"height":236}},{"type":"Image","props":{"y":58,"x":22,"width":120,"visible":true,"var":"player4Icon","skin":"comp/bg3.png","height":120}},{"type":"Label","props":{"y":10,"x":2,"width":160,"var":"player4Name","text":"昵称","overflow":"hidden","height":50,"fontSize":42,"color":"#c1f6ee","align":"center"}},{"type":"Label","props":{"y":184,"x":4,"width":160,"var":"player4Golden","text":"30万","overflow":"hidden","height":50,"fontSize":34,"color":"#c1f6ee","align":"center"}}]},{"type":"Box","props":{"y":471,"x":-182,"width":165,"var":"box1","name":"box1","height":236},"compId":27,"child":[{"type":"Image","props":{"x":-5.684341886080802e-14,"width":165,"var":"player1","skin":"comp/bg4.png","pivotX":-5.684341886080802e-14,"height":236}},{"type":"Image","props":{"y":64,"x":26,"width":120,"var":"player1Icon","skin":"comp/bg3.png","height":120}},{"type":"Label","props":{"y":10,"x":2,"width":170,"var":"player1Name","text":"昵称","overflow":"hidden","height":50,"fontSize":42,"color":"#c1f6ee","align":"center"}},{"type":"Label","props":{"y":184,"x":4,"width":160,"var":"player1Golden","text":"30万","overflow":"hidden","height":50,"fontSize":34,"color":"#c1f6ee","align":"center"}}]},{"type":"Box","props":{"y":471,"x":1096,"width":165,"var":"box5","name":"box5","height":236},"compId":32,"child":[{"type":"Image","props":{"x":-5.684341886080802e-14,"width":165,"var":"player5","skin":"comp/bg4.png","pivotX":-5.684341886080802e-14,"height":236}},{"type":"Image","props":{"y":58,"x":22,"width":120,"var":"player5Icon","skin":"comp/bg3.png","height":120}},{"type":"Label","props":{"y":10,"x":2,"width":160,"var":"player5Name","text":"昵称","overflow":"hidden","height":50,"fontSize":42,"color":"#c1f6ee","align":"center"}},{"type":"Label","props":{"y":184,"x":4,"width":160,"var":"player5Golden","text":"30万","overflow":"hidden","height":50,"fontSize":34,"color":"#c1f6ee","align":"center"}}]},{"type":"Box","props":{"y":1189,"x":241,"width":598,"visible":false,"var":"menu","name":"menu","mouseEnabled":true,"height":414},"child":[{"type":"Image","props":{"y":175,"x":463,"width":168,"visible":false,"skin":"comp/compare.png","height":164},"compId":89},{"type":"Image","props":{"y":-19,"x":205,"visible":false,"skin":"comp/fill.png"},"compId":93},{"type":"Image","props":{"y":34,"x":358,"visible":false,"skin":"comp/cingl.png"},"compId":95},{"type":"Image","props":{"y":31,"x":66,"width":161,"visible":false,"skin":"comp/risk.png","height":153},"compId":96},{"type":"Image","props":{"y":175,"x":-37,"visible":false,"skin":"comp/discard.png"},"compId":98},{"type":"Label","props":{"y":313,"x":472.99999999999966,"width":150,"visible":false,"text":"跟注","height":60,"fontSize":38,"color":"#09f81c","bgColor":"#4c4545","alpha":0.5,"align":"center"},"child":[{"type":"Sprite","props":{"y":3,"x":37,"width":93,"renderType":"mask","height":30},"child":[{"type":"Circle","props":{"y":18,"x":71,"radius":20,"lineWidth":1,"fillColor":"#ff0000"}},{"type":"Circle","props":{"y":18,"x":8,"radius":20,"lineWidth":1,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":-2,"x":5,"width":69,"lineWidth":1,"height":40,"fillColor":"#ff0000"}}]}]},{"type":"Label","props":{"y":173.99999999999955,"x":370.9999999999998,"width":150,"visible":false,"text":"比牌","height":60,"fontSize":38,"color":"#09f81c","bgColor":"#4c4545","alpha":0.5,"align":"center"},"child":[{"type":"Sprite","props":{"y":3,"x":37,"width":93,"renderType":"mask","height":30},"child":[{"type":"Circle","props":{"y":18,"x":71,"radius":20,"lineWidth":1,"fillColor":"#ff0000"}},{"type":"Circle","props":{"y":18,"x":8,"radius":20,"lineWidth":1,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":-2,"x":5,"width":69,"lineWidth":1,"height":40,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":1622,"x":401,"width":116,"visible":false,"var":"card1","name":"card1","height":181},"compId":86},{"type":"Box","props":{"y":1622,"x":481,"width":116,"visible":false,"var":"card2","name":"card2","height":181},"compId":87},{"type":"Box","props":{"y":1622,"x":561,"width":116,"visible":false,"var":"card3","name":"card3","height":181},"compId":88},{"type":"Image","props":{"y":742,"x":496,"width":67,"visible":false,"skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":104},"compId":63},{"type":"Image","props":{"y":742,"x":506,"width":67,"visible":false,"skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":104},"compId":64},{"type":"Image","props":{"y":742,"x":516,"width":67,"visible":false,"skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":104},"compId":65},{"type":"Box","props":{"y":1623,"x":398,"width":274,"visible":false,"var":"cardBox","name":"cardBox","height":183},"compId":83,"child":[{"type":"Image","props":{"y":-1,"x":1.9999999999999432,"width":116,"visible":true,"skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":181},"compId":76},{"type":"Image","props":{"y":-1,"x":79.99999999999989,"width":116,"visible":true,"skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":181},"compId":77},{"type":"Image","props":{"y":-1,"x":161.9999999999999,"width":116,"visible":true,"skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":181},"compId":78},{"type":"Label","props":{"y":70,"x":40,"width":200,"visible":false,"text":"点击看牌","height":60,"fontSize":38,"color":"#09f81c","bgColor":"#4c4545","alpha":0.9,"align":"center"},"compId":145,"child":[{"type":"Sprite","props":{"y":4,"x":12,"width":180,"renderType":"mask","height":30},"child":[{"type":"Circle","props":{"y":18,"x":160,"radius":20,"lineWidth":1,"fillColor":"#ff0000"}},{"type":"Circle","props":{"y":18,"x":10,"radius":20,"lineWidth":1,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":-2,"x":5,"width":150,"lineWidth":1,"height":40,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":742,"x":496,"width":67,"visible":false,"var":"seat2Card1","skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":104},"compId":102},{"type":"Image","props":{"y":742,"x":506,"width":67,"visible":false,"var":"seat2Card2","skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":104},"compId":103},{"type":"Image","props":{"y":742,"x":516,"width":67,"visible":false,"var":"seat2Card3","skin":"comp/back.png","skewY":0,"skewX":0,"scaleY":1,"scaleX":1,"height":104},"compId":104},{"type":"Box","props":{"y":620,"x":400,"width":280,"visible":true,"var":"chipBox","height":380}}],"animations":[{"nodes":[{"target":63,"keyframes":{"y":[{"value":742,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":0},{"value":1800,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":6}],"x":[{"value":496,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":0},{"value":514,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":6}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":63,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":63,"key":"visible","index":6}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":63,"key":"skewY","index":0},{"value":180,"tweenMethod":"linearNone","tween":true,"target":63,"key":"skewY","index":6}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":63,"key":"skewX","index":0},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":63,"key":"skewX","index":6}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleY","index":0},{"value":1.731,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleY","index":6}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleX","index":0},{"value":1.731,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleX","index":6}]}},{"target":64,"keyframes":{"y":[{"value":742,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":0},{"value":742,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":6},{"value":1800,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":12}],"x":[{"value":506,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":0},{"value":506,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":6},{"value":594,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":12}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":64,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":64,"key":"visible","index":12}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"skewY","index":6},{"value":180,"tweenMethod":"linearNone","tween":true,"target":64,"key":"skewY","index":12}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"skewX","index":6},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":64,"key":"skewX","index":12}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleY","index":6},{"value":1.731,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleY","index":12}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleX","index":6},{"value":1.731,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleX","index":12}]}},{"target":65,"keyframes":{"y":[{"value":742,"tweenMethod":"linearNone","tween":true,"target":65,"key":"y","index":0},{"value":742,"tweenMethod":"linearNone","tween":true,"target":65,"key":"y","index":6},{"value":742,"tweenMethod":"linearNone","tween":true,"target":65,"key":"y","index":12},{"value":1800,"tweenMethod":"linearNone","tween":true,"target":65,"key":"y","index":18}],"x":[{"value":516,"tweenMethod":"linearNone","tween":true,"target":65,"key":"x","index":0},{"value":516,"tweenMethod":"linearNone","tween":true,"target":65,"key":"x","index":6},{"value":516,"tweenMethod":"linearNone","tween":true,"target":65,"key":"x","index":12},{"value":674,"tweenMethod":"linearNone","tween":true,"target":65,"key":"x","index":18}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":65,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":65,"key":"visible","index":18}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":65,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":65,"key":"skewY","index":12},{"value":180,"tweenMethod":"linearNone","tween":true,"target":65,"key":"skewY","index":18}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":65,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":65,"key":"skewX","index":12},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":65,"key":"skewX","index":18}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleY","index":12},{"value":1.731,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleY","index":18}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleX","index":12},{"value":1.731,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleX","index":18}]}},{"target":86,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":86,"key":"visible","index":0}]}},{"target":87,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":87,"key":"visible","index":0}]}},{"target":88,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":88,"key":"visible","index":0}]}},{"target":145,"keyframes":{"y":[{"value":70,"tweenMethod":"linearNone","tween":true,"target":145,"key":"y","index":0},{"value":70,"tweenMethod":"linearNone","tween":true,"target":145,"key":"y","index":18}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":145,"key":"x","index":0},{"value":40,"tweenMethod":"linearNone","tween":true,"target":145,"key":"x","index":18}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":145,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":145,"key":"visible","index":18}],"alpha":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":145,"key":"alpha","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":145,"key":"alpha","index":18}]}},{"target":83,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":83,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":83,"key":"visible","index":18}]}}],"name":"deal3","id":1,"frameRate":24,"action":0},{"nodes":[{"target":27,"keyframes":{"y":[{"value":471,"tweenMethod":"linearNone","tween":true,"target":27,"key":"y","index":0}],"x":[{"value":-182,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":0},{"value":48,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":4}]}}],"name":"seatAni1","id":2,"frameRate":24,"action":0},{"nodes":[{"target":17,"keyframes":{"y":[{"value":894,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":0}],"x":[{"value":-182,"tweenMethod":"linearNone","tween":true,"target":17,"key":"x","index":0},{"value":48,"tweenMethod":"linearNone","tween":true,"target":17,"key":"x","index":4}],"width":[{"value":165,"tweenMethod":"linearNone","tween":true,"target":17,"key":"width","index":0},{"value":165,"tweenMethod":"linearNone","tween":true,"target":17,"key":"width","index":4}],"name":[{"value":"box2","tweenMethod":"linearNone","tween":false,"target":17,"key":"name","index":0}]}}],"name":"seatAni2","id":3,"frameRate":24,"action":0},{"nodes":[{"target":22,"keyframes":{"x":[{"value":1096,"tweenMethod":"linearNone","tween":true,"target":22,"key":"x","index":0},{"value":856,"tweenMethod":"linearNone","tween":true,"target":22,"key":"x","index":4}]}}],"name":"seatAni4","id":4,"frameRate":24,"action":0},{"nodes":[{"target":32,"keyframes":{"x":[{"value":1096,"tweenMethod":"linearNone","tween":true,"target":32,"key":"x","index":0},{"value":856,"tweenMethod":"linearNone","tween":true,"target":32,"key":"x","index":4}]}}],"name":"seatAni5","id":5,"frameRate":24,"action":0},{"nodes":[{"target":78,"keyframes":{"y":[{"value":-1,"tweenMethod":"linearNone","tween":true,"target":78,"key":"y","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":78,"key":"y","index":6}],"x":[{"value":161.9999999999999,"tweenMethod":"linearNone","tween":true,"target":78,"key":"x","index":0},{"value":79.99,"tweenMethod":"linearNone","tween":true,"target":78,"key":"x","index":3},{"value":1.999,"tweenMethod":"linearNone","tween":true,"target":78,"key":"x","index":6},{"value":1.999,"tweenMethod":"linearNone","tween":true,"target":78,"key":"x","index":9},{"value":110,"tweenMethod":"linearNone","tween":true,"target":78,"key":"x","index":12}],"width":[{"value":116,"tweenMethod":"linearNone","tween":true,"target":78,"key":"width","index":0},{"value":116,"tweenMethod":"linearNone","tween":true,"target":78,"key":"width","index":3},{"value":116,"tweenMethod":"linearNone","tween":true,"target":78,"key":"width","index":6},{"value":116,"tweenMethod":"linearNone","tween":true,"target":78,"key":"width","index":9},{"value":8,"tweenMethod":"linearNone","tween":true,"target":78,"key":"width","index":12}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":78,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":78,"key":"visible","index":12}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"skewY","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"skewY","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"skewY","index":9}]}},{"target":77,"keyframes":{"x":[{"value":79.99999999999989,"tweenMethod":"linearNone","tween":true,"target":77,"key":"x","index":0},{"value":79.99,"tweenMethod":"linearNone","tween":true,"target":77,"key":"x","index":3}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":77,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":77,"key":"visible","index":3}]}},{"target":76,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":76,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":76,"key":"visible","index":6}]}},{"target":88,"keyframes":{"y":[{"value":1622,"tweenMethod":"linearNone","tween":true,"target":88,"key":"y","index":0}],"x":[{"value":561,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":0},{"value":481,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":3},{"value":401,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":6},{"value":401,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":9},{"value":401,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":12},{"value":481,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":15},{"value":561,"tweenMethod":"linearNone","tween":true,"target":88,"key":"x","index":18}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":88,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":88,"key":"visible","index":9}]}},{"target":87,"keyframes":{"x":[{"value":481,"tweenMethod":"linearNone","tween":true,"target":87,"key":"x","index":0},{"value":481,"tweenMethod":"linearNone","tween":true,"target":87,"key":"x","index":3},{"value":401,"tweenMethod":"linearNone","tween":true,"target":87,"key":"x","index":6},{"value":401,"tweenMethod":"linearNone","tween":true,"target":87,"key":"x","index":12},{"value":481,"tweenMethod":"linearNone","tween":true,"target":87,"key":"x","index":15}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":87,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":87,"key":"visible","index":9}]}},{"target":86,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":86,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":86,"key":"visible","index":9}]}},{"target":63,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":63,"key":"visible","index":0}]}},{"target":64,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":64,"key":"visible","index":0}]}},{"target":65,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":65,"key":"visible","index":0}]}},{"target":145,"keyframes":{"y":[{"value":70,"tweenMethod":"linearNone","tween":true,"target":145,"key":"y","index":0}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":145,"key":"visible","index":0}]}}],"name":"cardAni","id":6,"frameRate":24,"action":0},{"nodes":[{"target":98,"keyframes":{"y":[{"value":185,"tweenMethod":"linearNone","tween":true,"target":98,"key":"y","index":0},{"value":175,"tweenMethod":"linearNone","tween":true,"target":98,"key":"y","index":10}],"x":[{"value":213,"tweenMethod":"linearNone","tween":true,"target":98,"key":"x","index":0},{"value":-37,"tweenMethod":"linearNone","tween":true,"target":98,"key":"x","index":10}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":98,"key":"visible","index":0}]}},{"target":89,"keyframes":{"y":[{"value":185,"tweenMethod":"linearNone","tween":true,"target":89,"key":"y","index":0},{"value":175,"tweenMethod":"linearNone","tween":true,"target":89,"key":"y","index":10}],"x":[{"value":213,"tweenMethod":"linearNone","tween":true,"target":89,"key":"x","index":0},{"value":463,"tweenMethod":"linearNone","tween":true,"target":89,"key":"x","index":10}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":89,"key":"visible","index":0}]}},{"target":95,"keyframes":{"y":[{"value":184,"tweenMethod":"linearNone","tween":true,"target":95,"key":"y","index":0},{"value":34,"tweenMethod":"linearNone","tween":true,"target":95,"key":"y","index":10}],"x":[{"value":208,"tweenMethod":"linearNone","tween":true,"target":95,"key":"x","index":0},{"value":358,"tweenMethod":"linearNone","tween":true,"target":95,"key":"x","index":10}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":95,"key":"visible","index":0}]}},{"target":96,"keyframes":{"y":[{"value":181,"tweenMethod":"linearNone","tween":true,"target":96,"key":"y","index":0},{"value":31,"tweenMethod":"linearNone","tween":true,"target":96,"key":"y","index":10}],"x":[{"value":216,"tweenMethod":"linearNone","tween":true,"target":96,"key":"x","index":0},{"value":66,"tweenMethod":"linearNone","tween":true,"target":96,"key":"x","index":10}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":96,"key":"visible","index":0}]}},{"target":93,"keyframes":{"y":[{"value":181,"tweenMethod":"linearNone","tween":true,"target":93,"key":"y","index":0},{"value":-19,"tweenMethod":"linearNone","tween":true,"target":93,"key":"y","index":10}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":93,"key":"visible","index":0}]}}],"name":"menuAni","id":7,"frameRate":24,"action":0},{"nodes":[{"target":102,"keyframes":{"y":[{"value":742,"tweenMethod":"linearNone","tween":true,"target":102,"key":"y","index":0},{"value":1074,"tweenMethod":"linearNone","tween":true,"target":102,"key":"y","index":6}],"x":[{"value":496,"tweenMethod":"linearNone","tween":true,"target":102,"key":"x","index":0},{"value":297,"tweenMethod":"linearNone","tween":true,"target":102,"key":"x","index":6}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":102,"key":"visible","index":0}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":102,"key":"skewY","index":0},{"value":180,"tweenMethod":"linearNone","tween":true,"target":102,"key":"skewY","index":6}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":102,"key":"skewX","index":0},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":102,"key":"skewX","index":6}]}},{"target":103,"keyframes":{"y":[{"value":742,"tweenMethod":"linearNone","tween":true,"target":103,"key":"y","index":0},{"value":742,"tweenMethod":"linearNone","tween":true,"target":103,"key":"y","index":6},{"value":1074,"tweenMethod":"linearNone","tween":true,"target":103,"key":"y","index":12}],"x":[{"value":506,"tweenMethod":"linearNone","tween":true,"target":103,"key":"x","index":0},{"value":506,"tweenMethod":"linearNone","tween":true,"target":103,"key":"x","index":6},{"value":317,"tweenMethod":"linearNone","tween":true,"target":103,"key":"x","index":12}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":103,"key":"visible","index":0}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"skewY","index":6},{"value":180,"tweenMethod":"linearNone","tween":true,"target":103,"key":"skewY","index":12}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"skewX","index":6},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":103,"key":"skewX","index":12}]}},{"target":104,"keyframes":{"y":[{"value":742,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":0},{"value":742,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":6},{"value":742,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":12},{"value":1074,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":18}],"x":[{"value":516,"tweenMethod":"linearNone","tween":true,"target":104,"key":"x","index":0},{"value":516,"tweenMethod":"linearNone","tween":true,"target":104,"key":"x","index":12},{"value":337,"tweenMethod":"linearNone","tween":true,"target":104,"key":"x","index":18}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":104,"key":"visible","index":0}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"skewY","index":12},{"value":180,"tweenMethod":"linearNone","tween":true,"target":104,"key":"skewY","index":18}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"skewX","index":12},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":104,"key":"skewX","index":18}]}}],"name":"dealAni2","id":8,"frameRate":24,"action":0},{"nodes":[],"name":"ani9","id":9,"frameRate":24,"action":0},{"nodes":[{"target":161,"keyframes":{"startAngle":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":161,"key":"startAngle","index":0}],"renderType":[{"value":"hit","tweenMethod":"linearNone","tween":false,"target":161,"key":"renderType","index":0},{"value":"unHit","tweenMethod":"linearNone","tween":false,"target":161,"key":"renderType","index":2},{"value":"unHit","tweenMethod":"linearNone","tween":false,"target":161,"key":"renderType","index":4}],"endAngle":[{"value":360,"tweenMethod":"linearNone","tween":true,"target":161,"key":"endAngle","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":161,"key":"endAngle","index":60}]}}],"name":"ani10","id":10,"frameRate":24,"action":0}]};}
		]);
		return GameTableUI;
	})(View);
var LoginUI=(function(_super){
		function LoginUI(){
			
		    this.ctUsername=null;
		    this.ctPassword=null;
		    this.btLogin=null;
		    this.btBack=null;
		    this.lForget=null;

			LoginUI.__super.call(this);
		}

		CLASS$(LoginUI,'ui.LoginUI',_super);
		var __proto__=LoginUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("TextInputEx",TextInputEx);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoginUI.uiView);
		}

		STATICATTR$(LoginUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1080,"skin":"comp/bg1.png","height":1920}},{"type":"TextInput","props":{"y":710,"x":152,"width":775,"var":"ctUsername","text":"请输入用户名","skin":"comp/textinput.png","runtime":"TextInputEx","italic":true,"height":113,"fontSize":50,"color":"#e2bab9"}},{"type":"TextInput","props":{"y":990,"x":152,"width":775,"var":"ctPassword","text":"请输入密码","skin":"comp/textinput.png","runtime":"TextInputEx","italic":true,"height":113,"fontSize":50,"color":"#e2bab9"}},{"type":"Button","props":{"y":1350,"x":378,"width":324,"var":"btLogin","skin":"comp/button.png","labelSize":50,"label":"登     录","height":125}},{"type":"Button","props":{"y":40,"x":60,"width":125,"var":"btBack","skin":"comp/button.png","name":"close","labelSize":50,"label":"返回","height":75}},{"type":"Label","props":{"y":1638,"x":410,"width":259,"var":"lForget","text":"忘记密码","height":63,"fontSize":50,"color":"#b74637","align":"center"}}]};}
		]);
		return LoginUI;
	})(View);
var MainUI=(function(_super){
		function MainUI(){
			
		    this.btClassical=null;
		    this.btSetting=null;
		    this.btSign=null;
		    this.btMail=null;
		    this.btActivity=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);
		}

		STATICATTR$(MainUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1080,"skin":"comp/bg1.png","height":1920}},{"type":"Image","props":{"y":248,"x":106,"width":868,"skin":"comp/role.png","height":1377}},{"type":"Box","props":{"y":44,"x":528},"child":[{"type":"TextInput","props":{"y":4,"x":4,"width":242,"skin":"comp/textinput_all.png","height":60}},{"type":"TextInput","props":{"y":4,"x":274,"width":242,"skin":"comp/textinput_all.png","height":60}},{"type":"Image","props":{"y":4,"x":0,"width":60,"skin":"comp/金币＋.png","height":60}},{"type":"Image","props":{"y":4,"x":270,"width":60,"skin":"comp/钻石＋.png","height":60}}]},{"type":"Image","props":{"y":16,"x":20,"width":120,"skin":"comp/bg3.png","height":120}},{"type":"Label","props":{"y":46,"x":177,"width":264,"text":"昵称在此显示","overflow":"hidden","height":60,"fontSize":50,"color":"#9be00a","align":"left"}},{"type":"Button","props":{"y":1408,"x":388,"width":303,"var":"btClassical","stateNum":"1","skin":"comp/btn_classical.png","label":"label","height":303}},{"type":"Image","props":{"y":1810,"x":-4,"width":1080,"skin":"comp/bg2.png","height":110}},{"type":"Button","props":{"y":1817,"x":917,"width":100,"var":"btSetting","stateNum":"1","skin":"comp/btn_setting.png","label":"label","height":100}},{"type":"Button","props":{"y":1817,"x":62,"width":100,"var":"btSign","stateNum":"1","skin":"comp/btn_sign.png","label":"label","height":100}},{"type":"Button","props":{"y":1817,"x":632,"width":100,"var":"btMail","stateNum":"1","skin":"comp/btn_mail.png","label":"label","height":100}},{"type":"Button","props":{"y":1817,"x":347,"width":100,"var":"btActivity","stateNum":"1","skin":"comp/btn_activity.png","label":"label","height":100}}]};}
		]);
		return MainUI;
	})(View);
var NormalDialogUI=(function(_super){
		function NormalDialogUI(){
			
		    this.btBack=null;
		    this.txContext=null;
		    this.btOK=null;

			NormalDialogUI.__super.call(this);
		}

		CLASS$(NormalDialogUI,'ui.NormalDialogUI',_super);
		var __proto__=NormalDialogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NormalDialogUI.uiView);
		}

		STATICATTR$(NormalDialogUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1080,"skin":"comp/bg1.png","height":1920}},{"type":"Button","props":{"y":40,"x":60,"width":125,"var":"btBack","skin":"comp/button.png","name":"close","labelSize":50,"label":"返回","height":75}},{"type":"Label","props":{"y":836,"x":226,"width":627,"var":"txContext","text":"注册功能未开放","height":88,"fontSize":70,"color":"#88db2f","align":"center"}},{"type":"Button","props":{"y":1261,"x":430,"width":220,"var":"btOK","skin":"comp/button.png","name":"close","labelSize":50,"label":"确   定","height":92}}]};}
		]);
		return NormalDialogUI;
	})(Dialog);
var RegisterUI=(function(_super){
		function RegisterUI(){
			
		    this.btSubmit=null;
		    this.ctUsername=null;
		    this.ctPassword=null;
		    this.ctIdenty=null;
		    this.btBack=null;

			RegisterUI.__super.call(this);
		}

		CLASS$(RegisterUI,'ui.RegisterUI',_super);
		var __proto__=RegisterUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("TextInputEx",TextInputEx);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RegisterUI.uiView);
		}

		STATICATTR$(RegisterUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1080,"skin":"comp/bg1.png","height":1920}},{"type":"Button","props":{"y":1382,"x":349,"width":445,"var":"btSubmit","skin":"comp/button.png","labelSize":60,"labelColors":"#dd1e1e","label":"提交注册","height":107}},{"type":"Box","props":{"y":598,"x":183},"child":[{"type":"TextInput","props":{"y":0,"x":2,"width":775,"var":"ctUsername","text":"请输入手机号码","skin":"comp/textinput.png","runtime":"TextInputEx","restrict":"0123456789","italic":true,"height":113,"fontSize":50,"color":"#dbc2c2"}},{"type":"TextInput","props":{"y":406,"x":2,"width":775,"var":"ctPassword","text":"请输入密码","skin":"comp/textinput.png","runtime":"TextInputEx","promptColor":"#000000","italic":true,"height":113,"fontSize":50,"color":"#dbc2c2"}},{"type":"Box","props":{"y":200,"x":4},"child":[{"type":"TextInput","props":{"y":0,"x":0,"width":406,"var":"ctIdenty","text":"填写验证码","skin":"comp/textinput.png","runtime":"TextInputEx","italic":true,"height":113,"fontSize":50,"color":"#dbc2c2"}},{"type":"Button","props":{"y":1,"x":437,"width":334,"skin":"comp/button.png","labelSize":50,"label":"获取验证码","height":110}}]}]},{"type":"Button","props":{"y":40,"x":60,"width":125,"var":"btBack","skin":"comp/button.png","name":"close","labelSize":50,"labelColors":"#dd1e1e","label":"返回","height":75}}]};}
		]);
		return RegisterUI;
	})(Dialog);
var RegisterOKUI=(function(_super){
		function RegisterOKUI(){
			
		    this.btOK=null;

			RegisterOKUI.__super.call(this);
		}

		CLASS$(RegisterOKUI,'ui.RegisterOKUI',_super);
		var __proto__=RegisterOKUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RegisterOKUI.uiView);
		}

		STATICATTR$(RegisterOKUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":624,"height":308},"child":[{"type":"Image","props":{"y":0,"x":0,"width":624,"skin":"comp/bg2.png","height":308}},{"type":"Button","props":{"y":115,"x":185,"width":254,"var":"btOK","skin":"comp/button.png","name":"close","labelStrokeColor":"#e02d0b","labelSize":50,"labelColors":"#e02d0b","label":"注册成功！","height":77}}]};}
		]);
		return RegisterOKUI;
	})(Dialog);
var RoomUI=(function(_super){
		function RoomUI(){
			
		    this.btCommoner=null;
		    this.numOfCommoner=null;
		    this.numOfBour=null;
		    this.numOfRiches=null;
		    this.numOfBoss=null;
		    this.numOfNob=null;
		    this.numOfImp=null;

			RoomUI.__super.call(this);
		}

		CLASS$(RoomUI,'ui.RoomUI',_super);
		var __proto__=RoomUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoomUI.uiView);
		}

		STATICATTR$(RoomUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/bg_room.png"}},{"type":"Image","props":{"y":99,"x":302,"width":475,"skin":"comp/bg_classical.png","height":185}},{"type":"Box","props":{"y":342,"x":121,"width":837,"height":387},"child":[{"type":"Image","props":{"width":390,"var":"btCommoner","skin":"comp/commoner.png","height":390}},{"type":"Image","props":{"x":447,"width":390,"skin":"comp/bourgeois.png","height":390}},{"type":"Label","props":{"y":321,"x":180,"width":75,"var":"numOfCommoner","text":"5000","height":35,"fontSize":30,"align":"center"}},{"type":"Label","props":{"y":316,"x":628,"width":75,"var":"numOfBour","text":"5000","height":35,"fontSize":30,"align":"center"}}]},{"type":"Box","props":{"y":787,"x":121},"child":[{"type":"Image","props":{"y":0,"x":0,"width":390,"skin":"comp/riches.png","height":390}},{"type":"Image","props":{"x":447,"width":390,"skin":"comp/boss.png","height":390}},{"type":"Label","props":{"y":308,"x":169,"width":75,"var":"numOfRiches","text":"500","height":35,"fontSize":30,"align":"center"}},{"type":"Label","props":{"y":314,"x":621,"width":75,"var":"numOfBoss","text":"500","height":35,"fontSize":30,"align":"center"}}]},{"type":"Box","props":{"y":1258,"x":121},"child":[{"type":"Image","props":{"y":0,"x":0,"width":390,"skin":"comp/nobility.png","height":390}},{"type":"Image","props":{"y":10,"x":447,"width":390,"skin":"comp/imperial.png","height":390}}]},{"type":"Label","props":{"y":1573,"x":292,"width":75,"var":"numOfNob","text":"5000","height":35,"fontSize":30,"align":"center"}},{"type":"Label","props":{"y":1567,"x":741,"width":75,"var":"numOfImp","text":"5000","height":35,"fontSize":30,"align":"center"}},{"type":"Box","props":{"y":44,"x":538},"child":[{"type":"TextInput","props":{"y":4,"x":4,"width":242,"skin":"comp/textinput_all.png","height":60}},{"type":"TextInput","props":{"y":4,"x":274,"width":242,"skin":"comp/textinput_all.png","height":60}},{"type":"Image","props":{"y":4,"x":0,"width":60,"skin":"comp/金币＋.png","height":60}},{"type":"Image","props":{"y":4,"x":270,"width":60,"skin":"comp/钻石＋.png","height":60}}]},{"type":"Image","props":{"y":16,"x":30,"width":120,"skin":"comp/bg3.png","height":120}},{"type":"Label","props":{"y":46,"x":187,"width":264,"text":"昵称在此显示","overflow":"hidden","height":60,"fontSize":50,"color":"#9be00a","align":"left"}}]};}
		]);
		return RoomUI;
	})(View);
var StartUI=(function(_super){
		function StartUI(){
			
		    this.btReg=null;
		    this.btLogin=null;

			StartUI.__super.call(this);
		}

		CLASS$(StartUI,'ui.StartUI',_super);
		var __proto__=StartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StartUI.uiView);
		}

		STATICATTR$(StartUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1080,"skin":"comp/bg1.png","height":1920}},{"type":"Image","props":{"y":116,"x":52,"width":1001,"skin":"comp/role.png","height":1478}},{"type":"Button","props":{"y":1577,"x":216,"width":200,"var":"btReg","stateNum":"1","skin":"comp/btn_reg.png","labelSize":50,"label":"注册","height":200}},{"type":"Button","props":{"y":1577,"x":726,"width":200,"var":"btLogin","stateNum":"1","skin":"comp/btn_login.png","labelSize":50,"label":"登录","height":200}}]};}
		]);
		return StartUI;
	})(View);