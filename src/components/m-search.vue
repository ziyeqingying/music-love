<template>
	<div class="search">
		<div class="inputcover">
			<input type="search"  v-model="currentSearch"  name="search" class="input" placeholder="" value="" autocomplete="off">
		</div>
		<div class="hotsearch">
			<ul>
				<li class="item" v-for="item in hotList" @click="showResult(item.hotName)">
					<a href="##">{{item.hotName}}</a>
				</li>
			</ul>
		</div>
        <div class="resultlist" v-show="resultShow">
            <ul>
                <li class="song" v-for="item in resultList">
                    <a href="##">{{item.resultName}}</a>
                </li>
                
            </ul>
        </div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
        data() {
            return {
                hotList: [],
                resultList: [],
                resultShow: false,
                currentSearch: ""
            }
        },
        mounted() {
            this.getHotList();
            this.getResultList();
        },
        methods: {

            getHotList() {
                let selfvue = this;
                this.$axios.get('/static/data/hotSearch.json').then(function(response){
                   selfvue.hotList = response.data
                })
            },
            getResultList() {
                let selfvue = this;
                this.$axios.get('/static/data/searchResult.json').then(function(response){
                   selfvue.resultList = response.data;
                   console.log(response.data);
                })
            },
            showResult(hotName) {
                this.currentSearch = hotName;
                this.resultShow = true;
            }
        },
        watch: {
            currentSearch: function() {
                if(this.currentSearch == "") {
                    this.resultShow = false;
                }
            }
        }
    }
</script>
<style scoped  lang="stylus" rel="stylesheet/stylus">
    @import "../common/css/reset"
.search
    padding-left 20px
    padding-right 20px
    padding-top 10px
    .inputcover
        position: relative;
        width: 100%;
        height: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        background: #ebecec;
        border-radius: 30px;
        .input 
            width: 100%;
            height: 30px;
            line-height: 18px;
            background: transparent;
            font-size: 16px;
            color: #333;       
            -webkit-appearance: none;
            border-radius: 0;
            border: 0; 
        .input:focus
            outline none   
    .hotsearch
    	padding-top 20px
    	.item
            display: inline-block;
            height: 25px;
            margin-right: 8px;
            margin-bottom: 8px;
            padding: 0 14px;
            font-size: 16px;
            line-height: 25px;
            color: #333; 
            border-radius: 32px; 
            border: 1px solid #d3d4da	
            a
            	font-size 16px            
    .resultlist
        .song
            background  url('/static/img/search_sprite.png') left center no-repeat
            background-size 15px 15px 
            padding-left 20%
            padding-top 8px
            padding-bottom 8px
            font-size 16px
            border-bottom 1px solid #eee
            border-top 1px solid #eee
                       
</style>