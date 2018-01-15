<template>
  <div>
    <button @click="onClick">onClick</button>
    <ul>
      <template v-for="item in items">
        <child :key="item.id" :item="item"></child>
      </template>
    </ul>
    <child2 :buObj="buObj">
      <button @click="onClick2">从父类修改数据</button>
    </child2>
  </div>
</template>

<script>
  import Child from "./Child"
  import Child2 from "./Child2"

  export default {
    name: "Parent",
    components: {
      Child,
      Child2
    },
    data() {
      return {
        items: [],
        buObj: {
          id: 12,
          msg: "测试watch是否会导致死循环"
        }
      };
    },
    created(){
      for(let i = 0; i < 10; i++){
        this.items.push({
          id: i,
          name: "Vue" + i
        });
      }
    },
    methods: {
      onClick(){
        this.items.push({
          id: this.items.length,
          name: "vue" + this.items.length
        });
      },
      onClick2(){
        this.buObj.msg = "从父类修改了buObj";
      }
    }
  }
</script>

<style>

</style>
