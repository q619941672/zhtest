<template>
<div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    <!-- <slot name="item-text"></slot> -->
</div>
</template>

<script>

export default {
  name:'TabBarItem',
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
  },
data(){
    return{
        //isActive:true,
    }
},
computed:{
    isActive(){
        return this.$route.path.indexOf(this.path) !== -1//实现点击小图标变色
    }
},
methods:{
    itemClick(){
        this.$router.replace(this.path)
    }
}

}
</script>

<style scped>

   .tab-bar-item{
     flex: 1;
     text-align: center;
     height: 49px;
     font-size: 14px;
   }
   .tab-bar-item img{
     width: 24px;
     height: 24px;

   }
   .active{
       color: red;
   }

</style>