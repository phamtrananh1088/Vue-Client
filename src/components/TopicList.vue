<template>
<div class="topiclist">
    <ul class="pog">
        <li class="afg" v-for="(item,index) in topics" :key="index">
            <router-link :to="item.url">
                <i :class="'icon '+item.ico"></i>
                {{item.name}}
            </router-link>
        </li>
    </ul>
</div>    
</template>
<style scoped>
* {
    box-sizing: border-box;
}
ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
.topiclist {
    overflow-x: scroll;
    background-color: #f4f4f4;
    padding: 8px;
    position: relative;
}
ul.pog {
display: grid;
grid-template-columns: auto auto auto auto auto auto auto auto;
grid-column-gap: 10px;
}
li.afg {
    margin-bottom: 8px;
}
li.afg a {
    background: #fff;
    border-radius: 8px;
    display: flex;
    padding: 12px;
    font-size: 12px;
    align-items: center;
    text-transform: uppercase;
    white-space: nowrap;
}
li.afg .icon {
    background-image: url(/sprite-k14_2020_v1.png);
    background-repeat: no-repeat;
    float: left;
    width: 18px;
    height: 18px;
    background-size: 380px;
    margin-top: -2px;
    margin-right: 5px;
}
li.afg .icon.icon-star {
    background-position: 0 0;
}
</style>
<script>
export default {
    name: 'TopicList',
    data () {
        return {
            topics: null
        }
    },
    created(){
        this.load()
    },
    methods: {
        load: function () {
            this.topics = [
                {ico:"icon-star",name:"Star", url:"/star"},
                {ico:"icon-star",name:"Music", url:"/star"},
                {ico:"icon-star",name:"Ciné", url:"/star"},
                {ico:"icon-star",name:"Tivi show", url:"/star"},
                {ico:"icon-star",name:"fashion", url:"/star"},
                {ico:"icon-star",name:"Sport", url:"/star"},
                {ico:"icon-star",name:"esports", url:"/star"},
                {ico:"icon-star",name:"video", url:"/star"},
                {ico:"icon-star",name:"đời sống", url:"/star"},
                {ico:"icon-star",name:"xã hội", url:"/star"},
                {ico:"icon-star",name:"ăn quẩy đi", url:"/star"},
                {ico:"icon-star",name:"xem mua luôn", url:"/star"},
                {ico:"icon-star",name:"thế giới", url:"/star"},
                {ico:"icon-star",name:"học đường", url:"/star"},
                {ico:"icon-star",name:"sức khỏe", url:"/star"},
                {ico:"icon-star",name:"2-tek", url:"/star"}
            ]
        }
    }
}
</script>