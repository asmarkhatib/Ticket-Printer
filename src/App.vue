<template>
  <div>
    <h1>The Ticket Printer...!</h1>
    <router-view></router-view>
    <!-- <div v-for="item in items" :key="item.id"><h1>{{ item.title }}</h1>
    <div v-for="(myImg, index) in item.images" :key="index">
    <img :src="myImg" alt="" /></div>
    </div> -->
  </div>
</template>

<script>
// export default {
//   data(){
//     return {
//       items: [],
//     }
//   },
//   mounted(){
//     fetch("https://dummyjson.com/products").then((res)=>{
//       return res.json();
//     }).then((data)=>{
//       this.items = data.products;
//     });
//   }
// };
// </script>
