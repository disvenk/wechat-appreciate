var shopInfo = new Object();
var registerType = false;

var mainBaseMix = {
	el:"#app",
	data : function(){
		return {
			loadShow : false,
			choiceType:1,
			typeList:[
				{
					name:'品牌故事',
					selectMenuType : 1,
					routerName:'home'
				},
				{
					name:'赞赏',
					selectMenuType : 2,
					routerName:'data'
				},
				{
					name:'我的',
					selectMenuType : 3,
					routerName:'my'
				}
			],
			wMessage: {show: false, message: null, type:null},
		}
	},
	created:function(){
		var that = this;
		this.loadShow = true;
		var localUrl = window.location.href;
		if (localUrl.indexOf("home") != -1){
			this.choiceType = 1;
		}else if(localUrl.indexOf("data") != -1){
			this.choiceType = 2;
		}else{
			this.choiceType = 3;
		}
		getShopInfo(function(shop){
			shopInfo = shop;
			setTimeout(function(){
				that.loadShow = false;
			},1000)			
		})
	},
	methods:{
		showAlter: function (msg ,type, time) {
			this.wMessage.show = true;
			this.wMessage.type = type;
			this.wMessage.message = msg;
			var that = this;
			setTimeout(function () {
				that.wMessage.show = false;
			}, time || 1000);
		},
		selectType:function(f){
			this.choiceType = f.selectMenuType;
		}
	},
    ready:function(){
        var that = this;
        $(".weui-tabbar").css("display","flex");
		window.addEventListener("popstate", function(e) {			
			var localUrl = window.location.href;
			if (localUrl.indexOf("home") != -1){
				that.choiceType = 1;
			}else if(localUrl.indexOf("data") != -1){
				that.choiceType = 2;
			}else{
				that.choiceType = 3;
			}
		}, false);
   },
   events: {
		"successMessage": function (msg,time) {
            this.showAlter(msg,1,time);
        },
        "remindMessage": function (msg,time) {
            this.showAlter(msg,2,time);
        },
        "loadingUnit": function (msg,time) {
            this.showAlter(msg,3,time);
        }
	}
}