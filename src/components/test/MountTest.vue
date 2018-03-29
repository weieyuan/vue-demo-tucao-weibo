<template>
  <div>
    <div id="mount1">
      mount1
    </div>
    <div id="mount2">
      mount1
    </div>
  </div>
</template>

<script>
  import Vue from "vue"

  let CustomerA = Vue.component("CustomerA", {
    template: "<div>customer-a {{msg}}</div>"
  })

  //  let CustomerA = Vue.component("CustomerA")

  let CustomerB = Vue.extend({
    template: "<div>customer-b {{msg}}</div>"
  })

  export default {
    data() {
      return {};
    },
    mounted() {
      new CustomerA({
        data: {
          msg: "AAA"
        }
      }).$mount("#mount1");
      new CustomerB({
        el: "#mount2",
        data() {
          return {
            msg: "BBB"
          }
        }
      })
    }
  }

</script>

<style></style>
