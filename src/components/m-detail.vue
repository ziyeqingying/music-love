<template>
	<div class="detail">
		<div class="songimg">
			<img :src="song.songImgSrc">
		</div>
		<div class="songtitle">
			{{song.songName}}
		</div>
		<div class="songaudio">
			<audio autoplay="autoplay">
				<source src="static/song/song.ogg" type="audio/ogg" />
  				<source src="static/song/song.mp3" type="audio/mpeg" />
			</audio>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		data() {
			return {song:""}
		},
		mounted(){
			this.song = JSON.parse(this.$route.params.id);
			console.log(this.$route.params)
		}
	}
</script>
<style scoped  lang="stylus" rel="stylesheet/stylus">
	.detail
		position fixed
		z-index 100
		top 0
		left 0
		right 0
		bottom 0
		background white
		.songtitle
			text-align center
			font-size 14px
		.songimg
			text-align center	
			img
				width 50%;
				border-radius 50%
				
				animation: circling 20s infinite linear; 
			@keyframes circling {
			    from {
                    -webkit-transform: rotate(0deg);
                }
                to {
                    -webkit-transform: rotate(360deg);
                }
			}	
</style>