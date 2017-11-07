<template>
  <div>
    <card-item v-for="(card, index) in cards"
               :key="card.id"
               :card="card"
               @onClickRemark="onClickRemark"></card-item>
  </div>
</template>

<script>
  import CardItem from "@/components/cards/CardItem"

  export default {
    components: {
      CardItem
    },
    name: "Cards",
    props: {
      cards: Array
    },
    data: function () {
      return {}
    },
    methods: {
      onClickRemark(oCard) {
        this.$emit("onClickRemark", oCard);
      }
    }
  }
</script>

<style scoped lang="less">

</style>
