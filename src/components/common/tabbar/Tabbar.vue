<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'Tabbar'
}
</script>

<style>

   #tab-bar{
     display: flex;
     background: #cac8c8;
     position: fixed;
     left: 0;
     right: 0;
     bottom: 0;
     box-shadow: 0px -2px 1px rgba(100,100,100);
     
   }
   .tab-bar-item{
     flex: 1;
     text-align: center;
     height: 49px;
   }
   .tab-bar-item img{
     width: 24px;
     height: 24px;
   }
</style>