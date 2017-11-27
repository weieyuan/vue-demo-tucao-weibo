<template>
  <div>
    <button @click="onClick">onClick</button>
    <ul>
      <template v-for="item in items">
        <child :key="item.id" :item="item"></child>
      </template>
    </ul>
  </div>
</template>

<script>
  import Child from "./Child"

  export default {
    name: "Parent",
    components: {
      Child
    },
    data() {
      return {
        items: []
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
      }
    }
  }
</script>

<style>

</style>
