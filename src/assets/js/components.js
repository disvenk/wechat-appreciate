//弹窗组件
Vue.component("weui-dialog", {
    props: ['show','msg','type'],
    template: '<div class="weui_loading_toast" v-if="show">' +
    '<div class="weui_mask_transparent" @click="close"></div>' +
    '<div class="weui_toast_show msg-dialog">' +		
		'<img src="assets/img/correctImg.png" class="msgImg" v-if="type && type == 1" />' +
		'<img src="assets/img/errorMsg.png" class="msgImg" v-if="type && type == 2" />' +
		'<img src="assets/img/loading.gif" class="msgImg" v-if="type && type == 3" />' +
    	'<p>{{msg}}</p>' +
    '</div>' +
    '</div>',
    methods: {
        close: function () {
            this.show = false;
        }
    }
});

/*正在加载弹窗*/
Vue.component("weui-loading", {
    props: ["msg", "show"],
    template: '<div class="weui_loading_toast" v-if="show">' +
    '	<div class="weui_mask_transparent" @click="close" style="background:#eee;z-index:501;"></div>' +
    '	<div class="weui_loading_content">' +
	'		<img class="logoImg" src="assets/img/restowechat.png" />'+		
    '		<p style="font-size:1rem;color:#868383;margin-top:17.5vh;">每一次的等待都是为了遇见更好的自己</p>' +  
    '		<p class="footTitle">Resto+提供技术支持</p>' +   
    '	</div>' +
    '</div>',
    methods: {
        close: function () {
           // this.show = false;
        }
    }
});