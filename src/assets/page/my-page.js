var myBaseMix = {
	data:function(){
		return {
			customer:{},
			appraiseCount:{},
			customerAppraiseList:[],
			textList:[
				{
					grade:20,
					word:"非常差"
				},
				{
					grade:40,
					word:"差"
				},
				{
					grade:60,
					word:"一般"
				},
				{
					grade:80,
					word:"满意"
				},
				{
					grade:100,
					word:"超赞"
				}
			],
			currentPage:0,
			showCount:3,
			isLoad:false,
			isOver:false,
		}
	},
	methods:{
		resetWindow:function(){
			var tab_menu = $(".weui-tabbar")
		    var content = $("#scrollList");
		    var height = $(window).height();
		    content.height(height - tab_menu.height());
		    content.css({
		        overflow: "hidden",
		        position: "relative"
		    })	
		},
		showCommentDetails:function(f){
//			window.location.href = "/wechat-appreciate/src/commentDetails.html?appraiseId="+f.id;
			location.href = baseUrl + "/wechat-appreciate/src/commentDetails.html?appraiseId="+f.id+"&baseUrl="+baseUrl;
		},
		reflushIsc:function(){
			if(!this.isc){
				var that = this;
				this.isc = new IScroll("#scrollList",{
					probeType : 2,
					click:iScrollClick(),
				});
				this.isc.on("scrollEnd",function(){
					if (this.y <= this.maxScrollY) {
						that.loadNextPage();
						this.refresh();
					}
				});					
			}
			this.isc.refresh();
		},
		loadNextPage:function(){
			var that = this;
			if(!that.isLoad&&!that.isOver){
				that.isLoad = true;
				var option = {
					currentPage:that.currentPage,
					showCount:that.showCount
				};	
				getCustomerAppraise(function(appraiseList){
					for(var i in appraiseList){
						that.customerAppraiseList.push(appraiseList[i]);					
					}
					$("#scrollList").css("display","block");
					if(appraiseList.length<that.showCount){
						that.isOver=true;
					}
					that.isLoad = false;
				},option);
				that.currentPage = that.currentPage+that.showCount;
			}
		},
	},
	created:function(){

	},
	ready:function(){	
		var that = this;
		this.resetWindow();
		this.loadNextPage();	
		getCustomer(function (customer) {
			that.customer = customer;
		});
		appraiseCount(function (result) {
			that.appraiseCount = result;			
		});	
		this.$watch("customerAppraiseList",function(){
			Vue.nextTick(function(){
				setTimeout(function(){
					that.reflushIsc();
				},50);
			});
		});	
		
	}
}