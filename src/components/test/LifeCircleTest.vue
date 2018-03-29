<template>
  <div>
    <h6>{{title}}</h6>
    <li v-for="(item, index) in itemsInner"
        :key="item.key"
        @click="updateData(item)"
        :style="itemStyle(item)">{{item.msg}}
    </li>
  </div>
</template>

<script>
  export default {
    name: "LifeCircleTest",
    props: {
      items: {
        type: Array
      }
    },
    data() {
      return {
        title: "LifeCircle",
        itemsInner: []
      };
    },
    beforeCreate() {
      console.log("LifeCircleTest beforeCreate")
    },
    created() {
      console.log("LifeCircleTest created");
      this.itemsInner = this.items.slice(0);
      this.itemsInner.forEach((item, index) => {
        item.key = index;
      });
    },
    beforeMount() {
      console.log("LifeCircleTest beforeMount");
//      this.itemsInner.forEach((item) => {
//        if (!item.hasOwnProperty("active")) {
//          this.$set(item, "active", false);
//        }
//      });
    },
    mounted() {
      console.log("LifeCircleTest mounted");
    },
    beforeUpdate() {
      console.log("LifeCircleTest beforeUpdate");
    },
    updated() {
      console.log("LifeCircleTest updated");
    },
    activated() {
      console.log("LifeCircleTest activated");
    },
    deactivated() {
      console.log("LifeCircleTest deactivated");
    },
    beforeDestroy() {
      console.log("LifeCircleTest beforeDestroy");
    },
    destroyed() {
      console.log("LifeCircleTest destroyed");
    },
    methods: {
      itemStyle(item){
        if(item.active){
          return {
            color: "red"
          };
        }
      },
      updateData(item) {
        if (!item.hasOwnProperty("active")) {
          item.active = true;
        }
        else {
          item.active = !item.active;
        }
      }
    },
    watch: {
      items: function (oNewVal, oOldVal) {
        console.log("LifeCircleTest items change");
      }
    }
  }
</script>

<style scoped>

</style>
