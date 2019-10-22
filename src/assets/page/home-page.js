
var homeBaseMix = {
	data : function(){
		return {			
			shop:shopInfo,
			map:null,
			appraiseList:[],
			pictureList:[],			
			advert:{},
			customer:{},
			praiseFlag:true,
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
			hasAppraise:true,
			iframeDialogComment:{show:false, appraise:null, customer:null, comment:null},
		}
	},
	methods:{
		openshoplocation:function(){
//			var that = this;
//			this.baiduMapshow = true;
//			Vue.nextTick(function(){
//				if(that.map == null){
//					setTimeout(function(){
//						that.map = new BMap.Map("allmap");
//						var new_point = new BMap.Point(shopInfo.latitude,shopInfo.longitude);
//						that.map.centerAndZoom(new_point,24);
//			            var marker = new BMap.Marker(new_point);
//						that.map.addOverlay(marker);
//					},3000)					
//				}
//			})								
		},
		showComment:function(appraise){
			this.iframeDialogComment.show = true;
			this.iframeDialogComment.appraise = appraise;
			this.iframeDialogComment.customer = this.customer;
			this.iframeDialogComment.comment = null;			
		},
		showCommentReply:function(appraise,comment){
			this.iframeDialogComment.show = true;
			this.iframeDialogComment.appraise = appraise;
			this.iframeDialogComment.customer = this.customer;
			this.iframeDialogComment.comment = comment;
		},
		displayAllComment:function(appraise){
			if($("#"+appraise.id+"span").css("display") == "none"){
				$("#"+appraise.id+"span").show();
				$("#"+appraise.id+"info").html("收起");
			}else if($("#"+appraise.id+"span").css("display") == "inline"){
				$("#"+appraise.id+"span").hide();
				$("#"+appraise.id+"info").html("查看全部"+appraise.appraiseComments.length+"条回复");
			}
		},	
		reflushIsc:function(){
			if(!this.isc){
				var that = this;
				this.isc = new IScroll(".stopIscroll",{
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
				getAppraiseList(function(appraiseList){
					$(".full-height").css("display","block");
					for(var i in appraiseList){
						that.appraiseList.push(appraiseList[i]);
						if(that.appraiseList.length>0){
							that.hasAppraise = false;
						}						
						appraiseList[i].isParse = true;
						for(var j in appraiseList[i].appraisePraises){
							var ap = appraiseList[i].appraisePraises[j];
							if(ap.customerId == that.customer.id){
								appraiseList[i].isParse = false;
							}
						}						
					}
					if(appraiseList.length<that.showCount){
						that.isOver=true;
					}
					that.isLoad = false;
				},option);
				that.currentPage = that.currentPage+that.showCount;
			}
		},
		resetWindow:function(){
			var tab_menu = $(".weui-tabbar")
		    var content = $(".stopIscroll");
		    var height = $(window).height();
		    content.height(height - tab_menu.height());
		    content.css({
		        overflow: "hidden",
		        position: "relative"
		    })	
		},
		showLike:function(appraise,isParse){
			var that = this;
			if(that.praiseFlag){
				if(isParse == true){
					that.praiseFlag = false;
					praise(appraise.id,function(result){
						if(result.success){
							var res = {};
							res.headPhoto = that.customer.headPhoto;
							var flag = true;
							for(var i=0;i<appraise.appraisePraises.length;i++){
								if(that.customer.headPhoto == appraise.appraisePraises[i].headPhoto){
									flag = false;
								}
							}
							if(flag){
								appraise.appraisePraises.push(res);
							}
							appraise.isParse = false;
							$("#"+appraise.id+"src").attr("src","assets/img/btn_dianzan_select.png");
							$("."+appraise.id).html("取消");
							that.praiseFlag = true;
							that.$dispatch("successMessage", "点赞成功");
							Vue.nextTick(function(){
								that.isc.refresh();
							})
						}
					});
				}else{
					that.praiseFlag = false;
					canelPraise(appraise.id,function(result){
						if(result.success){
							var res = {};
							res.headPhoto = that.customer.headPhoto;
							for(var i=0;i<appraise.appraisePraises.length;i++){
								if(that.customer.headPhoto == appraise.appraisePraises[i].headPhoto){
									appraise.appraisePraises.splice(i,1);
								}
							}
							appraise.isParse = true;
							$("#"+appraise.id+"src").attr("src","assets/img/btn_dianzan.png");
							$("."+appraise.id).html("点赞");
							that.praiseFlag = true;
							that.$dispatch("successMessage", "您取消了点赞");
							Vue.nextTick(function(){
								that.isc.refresh();
							})
						}
					});
				}
			}
		},			
	},
	created:function(){	
			
	},
	ready:function(){
		var that = this;
		that.resetWindow();
		this.loadNextPage();
		getHomePicture(function(list){
			that.pictureList = list;			
			if(list.length>1){
				Vue.nextTick(function () {
					new Swiper('.swiper-container', {
						direction : 'horizontal',
						loop : true,
						autoplay : 3000,
					});
				});
			}
		});
		getCustomer(function (customer) {
			that.customer = customer;
		});
		getShopAdvert(function(advert){
			that.advert = advert;
		});			
		if(!that.appraiseList.length){
			Vue.nextTick(function(){
				setTimeout(function(){
					that.reflushIsc();
				},50);
			});
		}
		this.$watch("appraiseList",function(){
			Vue.nextTick(function(){
				setTimeout(function(){
					that.reflushIsc();
				},50);
			});
		});	
		
	},
	components:{
		"iframe-dialog-comment":{
			props: ["show", "appraise", "customer", "comment"],				
			template:				
			'<div class="weui_dialog_alert" v-if="show">' +
				'<div class="weui_mask" @click="close" style="z-index:501;"></div>' +
				'<div class="weui_dialog_comment">' +
					'<div style="height:9rem">'+
						'<textarea id="contentInput" name="content" rows="7" cols="10" maxlength="140" v-model="remainWords"></textarea>' +
						'<span class="remainWord">{{remainWord}}</span>' +
					'</div>'+ 						
					'<div class="submitBtn">' +
						'<p class="cancleSendOut inMiddle" @click="close">取消</p>'+
						'<p class="sendOutAppraise inMiddle" @click="contentSubmit(appraise,customer,comment)">发送</p>'+
					'</div>'+					
				'</div>'+				
			'</div>',
			data:function(){
            	return {
            		remainWord:140,
            	}
            },
            watch: {
				'remainWords': function (newVal, oldVal) {
					if(newVal){
						this.remainWord = 140 - newVal.length;
					}											
				}
			},
			methods: {
				close: function () {
					this.show = false;
				},					
				contentSubmit:function(appraise,customer,comment){
					var that = this;
					var content = $('#contentInput').val();
					var appraiseId = appraise.id;
					var customerId = customer.id;
					var pid = null;						
					if (!content){
						that.$dispatch("remindMessage", "亲,评论不能为空哦",1000);
						return false;
					}
					if(comment != null ){
						pid = comment.customerId;
					}
					/*评论中提示*/
        			this.$dispatch("loadingUnit", "评论发送中……,请稍候", 99999);
					commentSubmit(content,appraiseId,customerId,pid,function (result){
						if(result.success){
							var res = {};
							res.nickName = customer.nickname;
							res.content = content;
							if(comment != null){
								res.pid = comment.customerId;
								res.replyName = comment.nickName;
							}else{
								res.pid = "";
							}
							appraise.appraiseComments.push(res);
							that.$dispatch("successMessage", "评论成功");
							that.remainWords = ''; //评论之后清空内容
							that.show = false;
						}
					})
				},					
			},				
			created: function () {
				var that = this;
				this.$watch("show", function (newVal,oldVal) {
					if(newVal){
						$("body").unbind("touchmove"); //解除浏览器的默认行为
						if (this.comment!=null) {
							$("#contentInput").attr("placeholder","回复"+this.comment.nickName+":");
						}else if(this.comment==null){
							$("#contentInput").attr("placeholder","尽情评论吧!");
						}							
						$("#contentInput").focus(); //自动打开软键盘，搜索框获取焦点  
					}else{
						$("body").bind("touchmove",function(e){
					    	e.preventDefault();
					    });
					}					
				});				
			},
		},	
	}
}