
var homePage = Vue.extend({
	template: '#home-temp',
	mixins: [homeBaseMix]
});

var dataPage = Vue.extend({
	template: '#data-temp',
	mixins: [dataBaseMix]
});

var myPage = Vue.extend({
	template: '#my-temp',
	mixins: [myBaseMix]
});

getShopInfo(function(shop){
	shopInfo = shop;		
})
console.log(JSON.stringify(shopInfo));

var router = new VueRouter()
	router.redirect({
		'/': '/data',
		title:shopInfo.name
	})
	router.map({		
		'/home': {
			name: 'home',
			component: homePage,
			title:"品牌故事"
		},
		'/data': {
			name: 'data',
			component: dataPage,
			title: shopInfo.name
//			subRoutes: {
//              '/comment': {
//                  component: commentPage
//              }
//          }
		},
		'/my': {
			name: 'my',
			component: myPage,
			title:"我的"
		}
	})


var App = Vue.extend({
	mixins: [mainBaseMix]
})
router.start(App, '#app')

router.afterEach(function (transition) {
    if (transition.to.title) {
        document.title = transition.to.title;
    }
});