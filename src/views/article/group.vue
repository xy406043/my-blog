<template>
    <div class="my-group">
        <!-- 展示所有分类 -->
        <div class="group" > 分类:</div>
        <div class="group-con" >
            <div v-for="item in groupList" :key="item._id">
                     {{item.info.name}}
            </div>
        </div>
    </div>
</template>

<script>
import {articleApi} from "../../api"
    export default {
        name: '',
        data() {
            return {
                groupList:[]
            }
        },
        mounted(){
            this.getGroupList()
            
        },
        methods:{
            getGroupList(){
                articleApi.getEveryGroupInfo().then( res =>{
                    this.groupList= res.result
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .my-group{
        padding: 30px;
        box-sizing:border-box;   // 解决外层设置浮动后本层使用padding-top 本层高度会变高的问题
    }
</style>