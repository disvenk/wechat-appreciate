
/**
 * 查询店铺的广告信息
 */
function getShopAdvert(successBck) {
	$.ajax({
		url : baseUrl+"/wechat/shop/new/shopAdvert",
		type:"post",
		success : function(result) {
			var advert = result.data[0];
//			if(advert){
//				advert.description = advert.description.replace(/\.\.\/upload/g,IMAGE_SERVICE+"upload");
//			}
			successBck && successBck(advert||{});
		}
	});
}

/**
 * 获取当前店铺信息
 */
function getShopInfo(successBck) {
	$.ajax({
		url : baseUrl+"/wechat/shop/new/currentshop",
		type:"post",	
		async:false,
		success : function(result) {
			successBck && successBck(result.data);
		}
	});
}

/**
 * 查询首页图片列表
 */
function getHomePicture(scbk) {
	$.ajax({
		url : baseUrl+"/wechat/shop/new/pictureslider",
		type:"post",	
		success : function(result) {	
			for ( var i in result.data) {
				var pic = result.data[i];
//				pic.pictureUrl = getPicUrl(pic.pictureUrl);					
			}
			scbk && scbk(result.data);
		}
	});
}

/**
 * 查询餐品列表
 */
function getArticleFamily(scbk) {
	$.ajax({
		url : baseUrl+"/wechat/article/new/articleFamilyList",
		type:"post",
		success : function(result) {
			var allFamilyList = result.data;				
			$.ajax({
				url : baseUrl+"/wechat/article/new/articleList",
				type:"post",
				success : function(result) {
					var articleList = result.data;
					allFamilyList.forEach(function(family){
						var f = family;						
						f.articles = [];
						articleList.forEach(function(article){
							if(article.articleFamilyId == f.id){	
								f.articles.push(article);
							}
				        });
					})					
					scbk && scbk(allFamilyList);
				}
			})
		}
	})
}

/**
 * 从数据库获取当前用户信息 
 */
function getCustomer(sbc) {
	$.ajax({
		url : baseUrl+"/wechat/customer/new/info",
		type:"post",
		success : function(user) {
			sbc && sbc(user.data);
		}
	});
}

//用户的评论点赞回复数
function appraiseCount(sbk){
	$.ajax({
		url:baseUrl+"/wechat/appraiseNew/my/appraiseCount",
		type:"post",
		success:function(result){
			sbk && sbk(result.data);
		}
	})
}

/**
 * 查询评论列表 通过基本参数查询 
 */
function getAppraiseList(successCbk, options) {
	var defaultOptions = {
		currentPage : 0,
		showCount : 3,
	};
	options = $.extend(defaultOptions, options);
	$.ajax({
		url : baseUrl+"/wechat/appraise/new/listAppraise",
		type:"post",
		data : options,
		success : function(result) {
			for ( var i in result.data) {
				var app = result.data[i];
			}
			successCbk && successCbk(result.data);
		}
	});
}

/**				
 * 保存评论		
 */
function saveMyAppraise(options,sbk){
	$.ajax({
		url:baseUrl+"/wechat/appraise/new/saveAppraise",
		contentType: 'application/json',
		data:JSON.stringify(options),
		type:"post",
		success:function(result){
			sbk && sbk(result);
		}
	})
}

/**				
 * 用户个人评论
 */
function getCustomerAppraise(successCbk, options){
	var defaultOptions = {
		currentPage : 0,
		showCount : 3,
	};
	options = $.extend(defaultOptions, options);
	$.ajax({
		url:baseUrl+"/wechat/appraiseNew/my/appraise",
		data:options,
		type:"post",
		success:function(result){
			for ( var i in result.data) {
				var app = result.data[i];
			}
			successCbk && successCbk(result.data);
		}
	})
}

//点赞
function praise(appraiseId,sbk){
	$.ajax({
		url:baseUrl+"/wechat/appraiseNew/save/praise",
		data:{appraiseId:appraiseId},
		type:"post",
		success:function(result){
			sbk && sbk(result);
		}
	})
}

//取消赞
function canelPraise(appraiseId,sbk){
	$.ajax({
		url:baseUrl+"/wechat/appraiseNew/del/praise",
		data:{appraiseId:appraiseId},
		type:"post",
		success:function(result){
			sbk && sbk(result);
		}
	})
}

/*调取百度地图*/
function wxOpenLocation(latitude,longitude,name,address){
	wx.openLocation({
		latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
		longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
		name: name, // 位置名
		address: address, // 地址详情说明
		scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
		infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
	});	
}

//检查是否在评论时间内
function checkAppraise(sbk){
    $.ajax({
        url:baseUrl+"/wechat/appraiseNew/appraiseCD",
        async:false,
        type:"post",
        success:function(data){
            sbk&&sbk(data);
        }
    })
}

//评论
function commentSubmit(content,appraiseId,customerId,pid,sbk){
	$.ajax({
		url:baseUrl+"/wechat/appraiseNew/save/comment",
		data:{
			content:content,
			appraiseId:appraiseId,
			customerId:customerId,
			pid:pid
		},
		type:"post",
		success:function(result){
			sbk && sbk(result);
		}
	})
}

/*根据评论ID获取指定评论*/
function appraiseCustomer(appraiseId, sbk) {
	$.ajax({
		url : baseUrl+"/wechat/appraiseNew/new/appraiseCustomer",
		data:{appraiseId:appraiseId},
		type:"post",
		success : function(result) {
			sbk && sbk(result.data);
		}
	});
}

function getAppraiseInfo(aid,cbk){
	$.post(baseUrl+"/wechat/appraise/new/getAppraiseInfo",{appraiseId:aid},function(result){
		var data = result.data;
		cbk&&cbk(data);
	});
}

function appraiseCustomer(appraiseId, sbk) {
	$.ajax({
		url : baseUrl+"/wechat/appraiseNew/new/appraiseCustomer",
		data:{appraiseId:appraiseId},
		type:"post",
		success : function(result) {
			sbk && sbk(result.data);
		}
	});
}

//验证手机号是否注册
function checkPhone(uerId,phone,successCbk) {
	$.ajax({
		url : baseUrl+"/wechat/gradeRegister/checkPhoneNumber",
		type:"post",
		data : {
			uerId : uerId,
			phone : phone
		},
		success : function(result) {
			successCbk && successCbk(result);
		}
	});
}

//发送验证码
function sendCode(phone,successCbk) {
	$.ajax({
		url : baseUrl+"/wechat/gradeRegister/sendAliCodeMsg",
		type:"post",
		data : {
			phone : phone			
		},
		success : function(result) {
			successCbk && successCbk(result);
		}
	});
}

//注册成功
function register(userId,phone,code,successCbk) {
	$.ajax({
		url : baseUrl+"/wechat/gradeRegister/updateCusromer",
		type:"post",
		data : {
			userId : userId,
			phone : phone,
			code: code
		},
		success : function(result) {
			successCbk && successCbk(result);
		}
	});
}

//获取评论时间
function getAppraiseTime(successCbk) {
	$.ajax({
		url : baseUrl+"/wechat/appraise/commentBaseSetting",
		type:"post",
		success : function(result) {
			successCbk && successCbk(result);
		}
	});
}

//获取评论标签
function getAppraiseLabel(level,successCbk) {
	$.ajax({
		url : baseUrl+"/wechat/appraise/shopShowPhoto",
		type:"post",
		data:{
			level: level
		},
		success : function(result) {
			successCbk && successCbk(result);
		}
	});
}