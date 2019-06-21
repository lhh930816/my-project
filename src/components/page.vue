
<template>
	<div class="page" id="page">
        <ul class="pages">
            <li @click="showPage(1,$event)"><i class="el-icon-d-arrow-left"></i></li>
            <li @click="showPage(pageCurrent-1,$event)"><i class="el-icon-arrow-left"></i></li>
            <li class="nume"><input type="text" v-model="pageCurrent" @keyup.enter="(mypageCurrent,$event,true)"></li>
            <li class="page-total">/ <span>{{pageCurrent}}</span></li>
            <li @click="showPage(pageCurrent+1,$event)"><i class="el-icon-arrow-right"></i></li>
            <li @click="page.pageCount,$event"><i class="el-icon-d-arrow-right"></i></li>
        </ul>
        <p>{{startData}}到{{endData}}条，共3{{page.totalCount}}条</p>
    </div>
</template>

<script>
	export default {
		props: {
			objData: {
	            type: Object,
	            default: function (){
	                return {
	                    data:[]
	                }
	            }
			}
		},
		data () {
            return {
                mypagesize: 3,
                mypageCurrent: 1,
                sortparam: ""
            }
        },
        computed: {
            pagesize: {
                get: function () {
                    return this.page.pagesize;
                },
                set: function (value) { 
                    this.mypagesize=value;
                 }
            },
            startData: function () {
                return this.page.pagesize*(this.page.pageCurrent-1)+1;
            },
            endData: function () {
                var max = this.page.pagesize*this.page.pageCurrent;
                return max > this.page.totalCount ? this.page.totalCount:max;
              }
        },
        methods: {
            showPage: function (pageIndex, $event) {
                if (pageIndex > 0) {
                    if (pageIndex > this.page.pageCount) pageIndex = this.page.pageCount;
                    this. $emit ('show-page',{pageCurrent:pageIndex,pagesize:this.mypagesize});//事件
                }
              }
        }
	}
</script>

<style>
</style>