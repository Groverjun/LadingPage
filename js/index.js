/*banner*/
var vm=new Vue({
	el:"#html",
	data:{
		html:"",
		name:"",
		bannerImg:["img/11.jpg","img/22.jpg","img/33.jpg","img/44.jpg","img/55.jpg"],
		bannerImgTo:"",
	},
	mounted:function(){
		var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: false,
                speed: 600,
                autoplay: 1500,
                observer: true,
				observeParents: true,
				autoplayDisableOnInteraction : false,
                onTouchEnd: function() {
                    swiper.startAutoplay();
                }
            });
	},
	methods:{
		addBannerImg(){
			this.bannerImg.push("img/11.jpg");
		},
		getBanner(index){
			var _this= this;
			this.dataImg(_this,this.$refs.uploadingBannerImg[index],function(data){
				_this.bannerImgTo=data;
				_this.bannerImg[index]=_this.bannerImgTo;
				_this.bannerImgTo="";
			})			
		},
		/*上传图片**/
		dataImg(_this,input_file, get_data){
            if (typeof (FileReader) === 'undefined') {  
                alert("抱歉，你的浏览器不支持 FileReader，不能将图片转换为Base64，请使用现代浏览器操作！");  
            } else {  
                try {  
                    var file = input_file.files[0];  
                    if (!/image\/\w+/.test(file.type)) {  
                        alert("请确保文件为图像类型");  
                        return false;  
                    }  
                    var reader = new FileReader();  
                    reader.onload = function () {  
                        get_data(this.result);  
                    }  
                    reader.readAsDataURL(file);  
                } catch (e) {  
                    alert('图片转Base64出错啦！' + e.toString());
                }  
            }					
		}
	}
	
})