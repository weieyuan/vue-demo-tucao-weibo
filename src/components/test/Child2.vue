<template>
  <div>
    <slot></slot>
    <p>
      id: {{buObjInner.id}}
      msg: {{buObjInner.msg}}
    </p>
    <button @click="onClick">子类修改内部数据</button>
  </div>
</template>

<script>
  export default {
    name: "Child2",
    props: {
      buObj: Object
    },
    data() {
      return {
        buObjInner: this.buObj
      };
    },
    methods: {
      onClick() {
        this.buObjInner.msg = "这是子类修改后的信息";
      }
    },
    watch: {
      buObj: {
        handler(oNewVal, oOldVal) {
          console.log("buOBj change");
          this.buObjInner = this.buObj;
        },
        deep: false
      }
    }
  }
</script>

<style scoped>

</style>
