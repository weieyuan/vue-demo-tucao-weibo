<template>
  <li>{{innerItem.id + ":" + innerItem.name}}</li>
</template>

<script>

  export default {
    name: "Child",
    props: {
      item: Object
    },
    data(){
      return {
        innerItem: this.item
      };
    }
  }
</script>

<style>

</style>
