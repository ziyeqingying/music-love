<template>
	<div id="app">	
		<div class="banner">
			热门歌曲
		</div>
		<m-songlist></m-songlist>
	</div>
</template>
<script type="text/ecmascript-6">
	import MSonglist from '../components/m-songlist'
	export default{
		data(){
			return {
				songList:[]
			}
		},
		methods: {
			getSongList() {
				var selfvue = this
				this.$axios.get("../../static/data/songList.json").then(function(response){
					selfvue.songList = response.data
				})
			}
		},
		mounted() {
			
		},
		components: {
			"m-songlist": MSonglist
		}
	}
	// export default {
	// 	components: {
	// 		"m-songlist": MSonglist
	// 	}
	// }
	// export default {
	// 	components: {
	// 		"m-songlist": MSonglist
	// 	}
	// }
</script>
<style scoped  lang="stylus" rel="stylesheet/stylus">
    @import "../common/css/reset"
    .banner
    	padding-top 70px;
    	background url('/static/img/hot_banner.jpg')
    	font-size 20px
    	color white
    	padding-left 50px
    	padding-bottom 70px
    	margin-bottom 20px
</style>