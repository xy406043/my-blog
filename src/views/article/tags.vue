<template>
    <div class="my-tag">
        <!-- 展示所有标签 -->
        <div class="tag" > 标签:</div>
        <div class="tag-con" >
            <div v-for="item in tagList" :key="item._id">
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
                tagList:[]
            }
        },
        mounted(){
            this.getTagList()
            
        },
        methods:{
            getTagList(){
                articleApi.getEveryTagInfo().then( res =>{
                    this.tagList= res.result
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .my-tag{
        padding: 30px;
        box-sizing:border-box;   // 解决外层设置浮动后本层使用padding-top 本层高度会变高的问题
    }
</style>