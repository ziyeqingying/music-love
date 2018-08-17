<template>
	<div class="recommend" v-if="songList.length">
		<h2 class="recommendlist">推荐歌单</h2>
		<keep-alive>
		<slider>
            <div v-for="item in songList" class="songdiv">
                <a :href="item.linkUrl">
                    <img class="needsclick songimg"  :src="item.songImgSrc">
                </a>
            </div>
        </slider>
		</keep-alive>
		<h2 class="recommendlist">推荐歌单</h2>
		<m-songlist></m-songlist>
	</div>
</template>
<script type="text/ecmascript-6">
	import MSonglist from '../components/m-songlist'
    import MSlider from '../components/m-slider'
    import router from  '../router'
	export default{
		data(){
			return {
				songList:[],
                recommends: []
			}
		},
		methods: {
			getSongList() {
				var selfvue = this
				this.$axios.get("../../static/data/songList.json").then(function(response){
					selfvue.songList = response.data
				})
			},
            selectSong(item) {
                this.$router.push({
                    name: 'MDetail',
                    params: {id: JSON.stringify(item)}
                })
            }
		},
		mounted() {
			this.getSongList()
		},
		components: {
			"m-songlist": MSonglist,
            "slider": MSlider
		}
	}
</script>
<style scoped  lang="stylus" rel="stylesheet/stylus">
    @import "../common/css/reset"
    .recommend
    	background #fcfcfd
    	height 300px
    	min-height 100%
    	ul
    		height 300px
    	.clearleft
    		clear left
    	li
    		width 32%
    		float left
    		padding-left 1%
    		position relative
    		text-align center
    		img
    			width 100%
    			height 100%
    			border-radius 10px
            .songName
    		    position absolute
    		    top 0px
    		    text-align center
    		    color white
    		    font-family "微软雅黑"	
    		    font-size 12px
    		    margin 0 auto
    .recommendlist
    	padding-left 9px
    	height 20px
    	line-height 20px
    	font-size 15px
    	margin-top 10px
    	text-align center
    	margin-bottom 10px
    	font-weight 400 
    	border-left 2px solid #d33a31
    	
</style>