var customerInfo = new Object();

var dataBaseMix = {
    data : function(){
        return {
        	scoreDetaile:{
        		scoreInfo:[],
        		expressionList:[
	        		{
		                expressionSrc:'assets/img/jicha_normal.png',
		                brightSrc:'assets/img/jicha_seltted.png',
		                state:false,
		                level:1,
		                score:20
		            },
		            {
		                expressionSrc:'assets/img/buman_normal.png',
		                brightSrc:'assets/img/buman_seltted.png',
		                state:false,
		                level:2,
		                score:40
		            },
		            {
		                expressionSrc:'assets/img/yiban_normal.png',
		                brightSrc:'assets/img/yiban_seltted.png',
		                state:false,
		                level:3,
		                score:60
		            },
		            {
		                expressionSrc:'assets/img/manyi_normal.png',
		                brightSrc:'assets/img/manyi_seltted.png',
		                state:false,
		                level:4,
		                score:80
		            },
		            {
		                expressionSrc:'assets/img/chaozan_normal.png',
		                brightSrc:'assets/img/chaozan_seltted.png',
		                state:false,
		                level:5,
		                score:100
		            }
	        	]
        	},
        	
            tabList:[
                {
                    name:"服务",
                    type:0,
                    currentExpression:[],
                    expressionList:[
                        {
                            expressionSrc:'assets/img/jicha_normal.png',
                            brightSrc:'assets/img/jicha_seltted.png',
                            state:false,
                            grade:20,
                        },
                        {
                            expressionSrc:'assets/img/buman_normal.png',
                            brightSrc:'assets/img/buman_seltted.png',
                            state:false,
                            grade:40
                        },
                        {
                            expressionSrc:'assets/img/yiban_normal.png',
                            brightSrc:'assets/img/yiban_seltted.png',
                            state:false,
                            grade:60
                        },
                        {
                            expressionSrc:'assets/img/manyi_normal.png',
                            brightSrc:'assets/img/manyi_seltted.png',
                            state:false,
                            grade:80,
                        },
                        {
                            expressionSrc:'assets/img/chaozan_normal.png',
                            brightSrc:'assets/img/chaozan_seltted.png',
                            state:false,
                            grade:100,
                        }
                    ],
                    textList:[
                        {text:"极差"},
                        {text:"不满"},
                        {text:"一般"},
                        {text:"满意"},
                        {text:"超赞"}
                    ]
                },
                {
                    name:"环境",
                    type:1,
                    currentExpression:[],
                    expressionList:[
                        {
                            expressionSrc:'assets/img/jicha_normal.png',
                            brightSrc:'assets/img/jicha_seltted.png',
                            state:false,
                            grade:20,
                        },
                        {
                            expressionSrc:'assets/img/buman_normal.png',
                            brightSrc:'assets/img/buman_seltted.png',
                            state:false,
                            grade:40,
                        },
                        {
                            expressionSrc:'assets/img/yiban_normal.png',
                            brightSrc:'assets/img/yiban_seltted.png',
                            state:false,
                            grade:60,
                        },
                        {
                            expressionSrc:'assets/img/manyi_normal.png',
                            brightSrc:'assets/img/manyi_seltted.png',
                            state:false,
                            grade:80,
                        },
                        {
                            expressionSrc:'assets/img/chaozan_normal.png',
                            brightSrc:'assets/img/chaozan_seltted.png',
                            state:false,
                            grade:100,
                        }
                    ],
                    textList:[
                        {text:"极差"},
                        {text:"不满"},
                        {text:"一般"},
                        {text:"满意"},
                        {text:"超赞"}
                    ]
                },
                {
                    name:"性价比",
                    type:2,
                    currentExpression:[],
                    expressionList:[
                        {
                            expressionSrc:'assets/img/jicha_normal.png',
                            brightSrc:'assets/img/jicha_seltted.png',
                            state:false,
                            grade:20,
                        },
                        {
                            expressionSrc:'assets/img/buman_normal.png',
                            brightSrc:'assets/img/buman_seltted.png',
                            state:false,
                            grade:40,
                        },
                        {
                            expressionSrc:'assets/img/yiban_normal.png',
                            brightSrc:'assets/img/yiban_seltted.png',
                            state:false,
                            grade:60,
                        },
                        {
                            expressionSrc:'assets/img/manyi_normal.png',
                            brightSrc:'assets/img/manyi_seltted.png',
                            state:false,
                            grade:80,
                        },
                        {
                            expressionSrc:'assets/img/chaozan_normal.png',
                            brightSrc:'assets/img/chaozan_seltted.png',
                            state:false,
                            grade:100,
                        }
                    ],
                    textList:[
                        {text:"极差"},
                        {text:"不满"},
                        {text:"一般"},
                        {text:"满意"},
                        {text:"超赞"}
                    ]
                },
                {
                    name:"氛围",
                    type:3,
                    currentExpression:[],
                    expressionList:[
                        {
                            expressionSrc:'assets/img/jicha_normal.png',
                            brightSrc:'assets/img/jicha_seltted.png',
                            state:false,
                            grade:20,
                        },
                        {
                            expressionSrc:'assets/img/buman_normal.png',
                            brightSrc:'assets/img/buman_seltted.png',
                            state:false,
                            grade:40,
                            type:1
                        },
                        {
                            expressionSrc:'assets/img/yiban_normal.png',
                            brightSrc:'assets/img/yiban_seltted.png',
                            state:false,
                            grade:60,
                            type:2
                        },
                        {
                            expressionSrc:'assets/img/manyi_normal.png',
                            brightSrc:'assets/img/manyi_seltted.png',
                            state:false,
                            grade:80,
                            type:3
                        },
                        {
                            expressionSrc:'assets/img/chaozan_normal.png',
                            brightSrc:'assets/img/chaozan_seltted.png',
                            state:false,
                            grade:100,
                            type:4
                        }
                    ],
                    textList:[
                        {text:"极差"},
                        {text:"不满"},
                        {text:"一般"},
                        {text:"满意"},
                        {text:"超赞"}
                    ]
                },
                {
                    name:"出品",
                    type:4,
                    currentExpression:[],
                    expressionList:[
                        {
                            expressionSrc:'assets/img/jicha_normal.png',
                            brightSrc:'assets/img/jicha_seltted.png',
                            state:false,
                            grade:20,
                        },
                        {
                            expressionSrc:'assets/img/buman_normal.png',
                            brightSrc:'assets/img/buman_seltted.png',
                            state:false,
                            grade:40,
                        },
                        {
                            expressionSrc:'assets/img/yiban_normal.png',
                            brightSrc:'assets/img/yiban_seltted.png',
                            state:false,
                            grade:60,
                        },
                        {
                            expressionSrc:'assets/img/manyi_normal.png',
                            brightSrc:'assets/img/manyi_seltted.png',
                            state:false,
                            grade:80,
                        },
                        {
                            expressionSrc:'assets/img/chaozan_normal.png',
                            brightSrc:'assets/img/chaozan_seltted.png',
                            state:false,
                            grade:100,
                        }
                    ],
                    textList:[
                        {text:"极差"},
                        {text:"不满"},
                        {text:"一般"},
                        {text:"满意"},
                        {text:"超赞"}
                    ]
                }
            ],
            appraise:'',
            remainWord:100,
            articleDetails:{show:false,articles:null},
            commentSuccess:{show:false},
            statusListInfo:[],
            customer:null,
            customerRegister:{show:false,customer:null},           
            familyList:[],		//菜品信息
            goodLabelList:[],	//好评lable
            badLabelList:[],	//差评lable
            selectionList:[],	//选择的标签
            registerType: registerType,
            appraiseBtn: true,
            appraiseText:{}
        }
    },
    watch: {
        'appraise': function (newVal, oldVal) {
            if(newVal){
                this.remainWord = 100 - newVal.length;
            }
        }
    },
    computed: {
        scoreStatus:function(){
            var that = this;
            var status = false;
            that.tabList.forEach(function(tab){
                if(tab.currentExpression.length == 0){
                    status = true;
                }
            })
            return status;
        },
        average:function(){
            var that = this;
            var sum = 0;
            var averageScore = 0;
            that.tabList.forEach(function(tab){
                sum += tab.currentExpression[0].grade;
                averageScore = sum / that.tabList.length;
            })
            return averageScore;
        },
        scoreLevel:function(){
        	var that = this;
        	var level = 0;
        	that.scoreDetaile.expressionList.forEach(function(s){
        		if(that.scoreDetaile.scoreInfo[0].state == s.state){
                    level = s.level;
                }
        	})
        	return level;
        },
        nowScore:function(){
        	var that = this;
        	var sum = 0;
        	that.scoreDetaile.expressionList.forEach(function(s){
        		if(that.scoreDetaile.scoreInfo[0].state == s.state){
                    sum = s.score;
                }
        	})
        	return sum;
        },
    },
    methods:{
        resetWindow:function(){
            var tab_menu = $(".weui-tabbar")
            var content = $(".full-height");
            var height = $(window).height();
            content.height(height - tab_menu.height());
            content.css({
                overflow: "hidden",
                position: "relative"
            })
        },
        getScore:function(f){
    	 	var that = this;
            if (that.scoreDetaile.scoreInfo.length == 0) { 
                f.state = true;
                that.scoreDetaile.scoreInfo.push(f);
            } else {
                that.scoreDetaile.expressionList.forEach(function(expression){
                    if(that.scoreDetaile.scoreInfo[0].state == expression.state){
                        expression.state = false;
                    }
                })
                that.scoreDetaile.scoreInfo = [];
                that.scoreDetaile.scoreInfo.push(f);
                console.log(JSON.stringify(that.scoreDetaile.scoreInfo));
                f.state = true;
            }
            that.selectionList = [];	//选择满意度清空已选label
            that.goodLabelList.forEach(function(k){
            	k.statue = true;
            })
            that.badLabelList.forEach(function(k){
            	k.statue = true;
            })
            Vue.nextTick(function () {
        		that.myScroll.refresh();             
            });
        },
        changeExpression:function(f,tab){
            var that = this;
            if (tab.currentExpression.length == 0) { //未选择表情
                f.state = true;
                tab.currentExpression.push(f);
            }else { //选择表情后
                tab.expressionList.forEach(function(expression){
                    if(tab.currentExpression[0].state == expression.state){
                        expression.state = false;
                    }
                })
                tab.currentExpression = [];
                tab.currentExpression.push(f);
                f.state = true;
            }           
        },
        choiceLabel:function(a){
        	var that = this;
        	var flag = false;
            for (var i = 0; i < that.selectionList.length; i++) {
                if (that.selectionList[i].id == a.id) {
                    flag = true;
                    a.statue = true;
                    that.selectionList.splice(i, 1);
                }
            }
            if (!flag) {
                that.selectionList.push(a);
                a.statue = false;
            }
            console.log(JSON.stringify(that.selectionList));
        },
        showArticleDetails:function(){            
            this.articleDetails.articles = this.familyList;
            this.articleDetails.show = true;
        },
        receiveReward:function(){
            var that = this;
            var appraiseGrade = [];
            var feedback = '';
            if(that.appraiseBtn){
                if(!this.scoreLevel){
                    that.$dispatch("remindMessage", "亲，请选择满意度!",3000);
                    return;
                }
//              if(this.appraise == null || this.appraise == ''){
//                  that.$dispatch("remindMessage", "亲，评论不能为空哦~",3000);
//                  return;
//              }else if(this.appraise.length < this.appraiseText.fourSmall && this.scoreLevel <= 4){
//                  that.$dispatch("remindMessage", "亲，评论字数不能小于"+this.appraiseText.fourSmall,3000);
//                  return;
//              }else if(this.appraise.length < this.appraiseText.fiveSmall && this.scoreLevel == 5){
//                  that.$dispatch("remindMessage", "亲，评论字数不能小于"+this.appraiseText.fiveSmall,3000);
//                  return;
//              }
                if(that.scoreStatus){
                    that.$dispatch("remindMessage", "亲，请勾选所有评分项~",3000);
                    return;
                }else{
                    that.tabList.forEach(function(tab){
                        var temp = {};
                        temp.type = tab.type;
                        temp.grade = tab.currentExpression[0].grade;
                        appraiseGrade.push(temp);
                    })
                    console.log(JSON.stringify(appraiseGrade));
                }

                this.selectionList.forEach(function(label){
                    feedback += label.title + ",";
                })
                var options = {
                    content:this.appraise,
                    allGrade:this.nowScore,
                    appraiseGrades:appraiseGrade,
                    appraiseSteps:this.statusListInfo,
                    customerId: that.customer.id,
                    level:this.scoreLevel,
                    feedback:feedback
                };

                that.appraiseBtn = false;

                checkAppraise(function(result){
                    if(!result.success){
                        that.$dispatch("successMessage", "你已经评论过啦,下次再来吧!~",3000);
                    }else{
                        saveMyAppraise(options,function(result){
                            if(result.success){
                                that.remainWord = 100,
                                that.appraise = '';			//评论成功清空信息
                                that.statusListInfo = [];
                                that.tabList.forEach(function(tab){
                                    tab.expressionList.forEach(function(expression){
                                        expression.state = false;		//表情设为初始状态
                                    })
                                });
                                that.selectionList = [];	//选择满意度清空已选label
                                that.goodLabelList.forEach(function(k){
                                    k.statue = true;
                                })
                                that.badLabelList.forEach(function(k){
                                    k.statue = true;
                                })

                                if(!that.registerType){
                                    that.customerRegister.show = true;
                                    that.customerRegister.customer = customerInfo;
                                }else{
                                    that.commentSuccess.show = true;
                                    that.$dispatch("successMessage", "评分成功~",1000);
                                }
                                setTimeout(function () {
                                    that.appraiseBtn = true;
                                },3000);
                            }
                        })
                    }
                })
            }
        }
    },
    created:function(){
        var that = this;
        getCustomer(function (customer) {
            that.customer = customer;
            customerInfo = customer;
            if(customer.isBindPhone){
                registerType = true;
            }
        });

        if(getParam("successAppraise") != null && getParam("successAppraise") == "true"){
            that.commentSuccess.show = true;
        }
        getAppraiseLabel(5,function(res){
        	that.goodLabelList = res.data;
        })
        getAppraiseLabel(4,function(res){
        	that.badLabelList = res.data;
        })
        getArticleFamily(function(fam){
            that.familyList = fam;			
        })
        getAppraiseTime(function(res){
    		if(res.success){
    			that.appraiseText = res;
    		}
    	})
    },
    ready:function(){
        this.resetWindow();
        this.myScroll = new IScroll(".full-height",{
            click:iScrollClick()
        });
    },
    events: {
        "get-status":function(list){
            this.statusListInfo = list;
        },
        "show-commentSuccess-dialog":function(){
        	var that = this;
            registerType = true;
            getCustomer(function (customer) {
                that.customer = customer;
                customerInfo = customer;
                that.commentSuccess.show = true;
            });            
        },
        "clean-expression":function(){
        	var that = this;
        	that.tabList.forEach(function(tab){
                tab.currentExpression = [];
            })
        }
    },
    components:{
        "article-details":{
            props:["show","articles"],
            template:
            '<div class="weui_loading_toast" v-if="show">' +
            '	<div class="weui_mask_transparent" style="background: rgba(40, 40, 40, 0.75);z-index:501;"></div>' +
            '	<div class="weui_article_content">' +
            '		<p class="producedArticle">出品详情</p>'+
            '	    <div class="main_content">'+
            '	    	<div class="full-height article-family-list" v-if="articles.length>0">' +
            '				<ul class="article-family-ul">' +
            '				<li v-for="f in articles" v-if="f.articles.length" @click="changeFamily(f)" :class="{active:f.id==currentFamily.id}" ontouchend="click()">'+
            '                	<span class="familyName">{{f.name}}</span>'+
            '                </li>'+
            '				</ul>'+
            '			</div>'+
            '	    	<div class="full-height article-list-wapper" v-if="articles.length>0">'+
            '				<div class="article-list">' +
            '				<div v-for="f in articles" v-if="f.articles.length" :data-family-id="f.id">' +
            '					<div class="article-family-group" v-for="a in f.articles">'+
            '                	<span class="familyName" style="width:50%;">{{a.name}}</span>'+
            '					<div class="commentBtns">'+
            '					<img class="scoreImg" v-for="k in a.arcticleStatusList" :src="k.click ? k.brightSrc : k.expressionSrc" @click="changeState(k,a)" ontouchend="click()"/>' +
            '					</div>'+
            '                	</div>'+
            '				</div>'+
            '				</div>'+
            '			</div>'+
			//          店铺未上传菜品			
            '			<div style="position:relative;top:15vh;" v-if="articles.length==0">'+
            '				<img class="noArticleImg" src="assets/img/noArticle.png" />'+
            '				<p style="text-align:center;">店铺暂未上传菜品</p>	'+
            '			</div>'+
            '	    </div>'+
            '		<div class="articleBtns">'+
            '		<div class="inMiddle">'+
            '		<div class="flex-container_article">'+
            '			<span class="article_btn" @click="close">取消</span>'+
            '			<span class="article_btn" style="background-color: #ff8832;color:#fff;" @click="confirmComment">确定</span>'+
            '		</div>'+
            '		</div>'+
            '		</div>'+
            '	</div>' +
            '</div>',
            data:function(){
                return {
                    currentFamily:{},
                    statusList:[]
                }
            },
            created:function(){
                var that = this;                
                this.$watch("show", function () {
                    if(this.show){
                    	that.currentFamily = that.articles[0];
                    	//console.log(JSON.stringify(that.articles));
                    	if(that.articles.length>0){
                    		setTimeout(function () {
	                            that.refreshArticleList();
	                        }, 1500);
                    	}                        
                    }
                });
            },
            methods:{
                close:function(){
                    this.show=false;
                    //取消点赞或踩的状态
                    this.articles.forEach(function(tab){
                        tab.articles.forEach(function(num){
                        	num.currentStatus = [];
                            num.arcticleStatusList.forEach(function(state){
                            	state.click = false;
                            })
                        })
                    })
                },
                changeFamily:function(f){
                    this.currentFamily = f;
                    var that = this;
                    var fid = this.currentFamily.id;
                    var dom = $(".article-list-wapper");
                    if (that.artListIsc) {
                        var fidDom = dom.find("[data-family-id='" + fid + "']");
                        that.artListIsc.scrollToElement(fidDom.get(0));
                    }
                },
                refreshArticleList: function () {
                    this.artListIsc = new IScroll(".article-list-wapper", {
                        click: iScrollClick(),
                    });
                    this.famListIsc = new IScroll(".article-family-list", {
                        click: iScrollClick(),
                    });
                    var that = this;
                    var familyId = null;
                    this.artListIsc.on("scroll", function () {
                        $(".article-family-group").each(function () {
                            var dom = $(this);
                            var position = dom.position();
                            if (position.top >= 0) {
                                return false;
                            }
                            familyId = dom.data("family-id");
                        });
                        that.currentFamily = {id: familyId};
                    });
                },
                changeState:function(k,a){
                    var that = this;
                    if (a.currentStatus.length == 0) { //未选择
                        k.click = true;
                        a.currentStatus.push(k);
                    }
                    else {
                        a.currentStatus.forEach(function(expression){
                            if(a.currentStatus[0].click == expression.click){
                                expression.click = false;
                            }
                        })
                        a.currentStatus = [];
                        a.currentStatus.push(k);
                        k.click = true;
                    }
                },
                confirmComment:function(){
                    var that = this;
                    this.articles.forEach(function(tab){
                        tab.articles.forEach(function(num){
                            var temp = {};
                            if(num.currentStatus != "0" && num.currentStatus.length>0){
                                temp.articleId = num.id;
                                temp.status = num.currentStatus[0].status;
                                that.statusList.push(temp);
                            }
                        })
                    })
                    console.log(JSON.stringify(that.statusList));
                    this.$dispatch("get-status",that.statusList);
                    this.show = false;
                    that.statusList = [];
                }
            }
        },
        "comment-success":{
            props:["show"],
            template:'<div class="weui_comment_content" v-if="show">' +
            '	<div class="thankJoin">'+
            '		<img src="assets/img/thank-you.png" class="thanksImg" />' +
            '		<p>感谢您的参与</p>'+
            '		<p>期待您的再一次光临</p>'+
            '	</div>'+
            '	<p class="instructions" style="color:#ff8832;font-size:0.9rem;">(同一用户在{{appraiseCD}}小时内只能参与一次活动哦)</p>'+
            '	<button class="weui_btn weui_btn_success" @click="close">好的</button>'+
            '</div>',
            data:function(){
                return {
                    appraiseCD:""
                }
            },
            created:function(){
                var that = this;                
                this.$watch("show", function () {
                    if(this.show){
                    	getAppraiseTime(function(res){
                    		if(res.success){

                    			 that.appraiseCD = res.distanceTime;
                    		}
                    	})
                    }
                });
            },
            methods:{
                close:function(){
                    this.show=false;
                    this.$dispatch("clean-expression");
                    this.$router.replace({ path: '/home' });
                }
            }
        },
        "customer-register":{
            props:["show","customer"],
            template:'<div class="weui_loading_toast" v-if="show">' +
            '	<div class="weui_mask_transparent"></div>' +
            '<div class="bg-pic">'+
            '<p class="reward-words">'+
            '<span class="reward-details"></span>'+
            '</p>'+
            '<div class="weui-cell item">'+
            '<div class="weui-cell__bd">'+
            '<input class="weui-input" id="phone-input" type="tel" placeholder="请输入手机号" v-model="phone">'+
            '</div>'+
            '</div>'+
            '<div class="weui-cell weui-cell_vcode">'+
            '<div class="weui-cell__bd">'+
            '<input class="weui-input" type="tel" id="code-input" placeholder="验证码" v-model="code">'+
            '</div>'+
            '<div class="weui-cell__ft">'+
            '<button class="weui-vcode-btn codeBtn" @click="getCode" :class="{disabled:remainTime>0}">{{remainTime||"获取验证码"}}</button>'+
            '</div>'+
            '</div>'+
            '<button type="submit" class="weui-btn weui-btn_primary" @click="saveLogin">提交</button>'+
            '</div>'+
            '</div>'+
            '</div>',
            data:function(){
                return {
                    remainTime:0,
                    getCodeBtn:true,
                    phone: "",
                    code: null,
                    rcode: null,
                    phoneReg : /^((13[\d])|(15[0-35-9])|(18[\d])|(145)|(147)|(17[0135678]))\d{8}$/,
                    codeReg : /^[0-9]{4}$/
                }
            },
            methods:{
                cutRemainTime: function () {
                    if (this.remainTime > 0) {
                        this.remainTime--;
                        var that = this;
                        setTimeout(function () {
                            that.cutRemainTime();
                        }, 1000);
                    }
                },
                getCode: function () {
                    var that = this;
                    that.phone = $('#phone-input').val();
                    if(!this.getCodeBtn){
                        return;
                    }
                    if (this.remainTime > 0) {
                        return;
                    } else if (this.phone.length == 0) {
                        that.$dispatch("remindMessage", "手机号码为空~",3000);
                        return;
                    } else if(!(that.phoneReg.test(that.phone))) {
                        that.$dispatch("remindMessage", "手机号码格式错误~",3000);
                        return;
                    }
                    //先验证手机号是否存在,成功才发送验证码
                    checkPhone(customerInfo.id,this.phone,function(res){
                    	if(!res.success){
                    		that.$dispatch("remindMessage",res.message,3000);
                    	}else{
                    		sendCode(that.phone, function (result) {
		                        if (result.success) {
		                            console.log("发送成功__");
		                            that.rcode = result.rcode;
		                            that.remainTime = 60;
		                            that.cutRemainTime();
		                        } else {
		                            console.log("发送失败__");
		                            that.$dispatch("remindMessage",result.message,3000);
		                        }
		                        that.getCodeBtn = true;
		                    });
                    	}
                    })
                },
                saveLogin:function(){
                    var that = this;                    
                    if(!that.code){
                        that.$dispatch("remindMessage", "请输入验证码~",3000);
                        return;
                    }else if(!that.codeReg.test(that.code)) {
                        that.$dispatch("remindMessage", "验证码格式错误~",3000);
                        return;
                    }else{
                        register(customerInfo.id, that.phone, $('#code-input').val(), function (result) {
                            if (result.success){
                                that.show = false;
                                that.$dispatch("show-commentSuccess-dialog");                                   
                            }else {
                                that.$dispatch("remindMessage",result.message,3000);
                            }
                        });
                    }
                }
            }
        }
    }
}