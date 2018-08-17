<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup" style="">
      <slot>
      </slot>
    </div>
   <!--  <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div> -->
  </div>
</template>
<script type="text/ecmascript-6">
	export default {
		mounted() {
			this._setSliderWidth(true);
			this._slide();
		},
		methods: {
			_setSliderWidth(isResize) {
				let firstNode = document.getElementsByClassName("songdiv")[0].cloneNode(true);
				this.$refs.sliderGroup.appendChild(firstNode)
				let divWidth = this.$refs.slider.clientWidth;
				//console.log(divWidth);
				for(var i = 0; i < document.getElementsByClassName("songdiv").length; i++){
					document.getElementsByClassName("songdiv")[i].style.width = divWidth + "px";
					document.getElementsByClassName("songdiv")[i].style.float = "left";
				}
				this.$refs.slider.style.overflow = "hidden";
				this.$refs.sliderGroup.style.width = 5*divWidth + "px";
          	},
          	_slide() {
          		var self = this;
          		var index = 0;
          		let intervalId = setInterval(function(){
          			clearInterval(intervalId);
          			index = index + 1;
          			self.$refs.sliderGroup.style.transform = "translate("+ -375*index +"px,0px)";
          			self.$refs.sliderGroup.style.transition = "1500ms";
          		}, 3000)
          		self.$refs.sliderGroup.addEventListener("webkitTransitionEnd", function(){
          			if(index == 4){
          				index = 0;
          				self.$refs.sliderGroup.style.transform = "translate("+ 0 +"px,0px)";
          				self.$refs.sliderGroup.style.transition = "0ms";
          			}
					intervalId = setInterval(function(){
	          			clearInterval(intervalId);
	          			index = index + 1;
	          			self.$refs.sliderGroup.style.transform = "translate("+ -375*index +"px,0px)";
	          			self.$refs.sliderGroup.style.transition = "1500ms";
          			}, 3000)
				})
          		var startPoint = 0;
    			var startEle = 0;
				self.$refs.slider.addEventListener("touchstart",function(e){
					clearInterval(intervalId);
					startPoint = e.changedTouches[0].pageX;
        			startEle = self.$refs.sliderGroup.offsetLeft;
        			
				})

				self.$refs.slider.addEventListener("touchmove",function(e){
        			var currPoint = e.changedTouches[0].pageX;
        			//console.log(currPoint);
        			var disX = currPoint - startPoint;
        			var left = startEle + disX;
        			//console.log(left);
        			self.$refs.sliderGroup.style.transition = "0ms";
        			self.$refs.sliderGroup.style.position = "relative";
        			self.$refs.sliderGroup.style.left = left + 'px';
    			});

    			self.$refs.slider.addEventListener("touchend",function(e){
    				var sliderGroup = self.$refs.sliderGroup
    				var leftLength = 0;
    				//console.log(sliderGroup.offsetLeft);
    			
    				var sliderLeft = sliderGroup.offsetLeft;
    				var sliderTransform = parseInt(sliderGroup.style.transform.substr(sliderGroup.style.transform.indexOf("(") + 1,sliderGroup.style.transform.indexOf(",") - sliderGroup.style.transform.indexOf("(") - 3));
    				if(isNaN(sliderTransform)) {
    					leftLength = -sliderLeft;
    				}
    				else {
    					leftLength = -(parseInt(sliderLeft) + sliderTransform);
    				}
    				console.log(leftLength);
    				self.$refs.sliderGroup.style.transform = "translate("+ -leftLength +"px,0px)"
	          		self.$refs.sliderGroup.style.transition = "0ms";
	          		self.$refs.sliderGroup.style.position = "relative";
        			self.$refs.sliderGroup.style.left = 0 + 'px';
    				var myindex = Math.round(leftLength/375);
    				console.log(myindex);
    				// self.$refs.sliderGroup.style.transform = "translate("+ -375*myindex +"px,0px)"
	       //    		self.$refs.sliderGroup.style.transition = "800ms";
    				clearInterval(intervalId);
    				intervalId = setInterval(function(){
	          			clearInterval(intervalId);
	          			index = index + 1;
	          			self.$refs.sliderGroup.style.transform = "translate("+ -375*index +"px,0px)"
	          			self.$refs.sliderGroup.style.transition = "1500ms";
          			}, 3000)
    			})
          	}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">		
	.songimg
		width 100%
</style>