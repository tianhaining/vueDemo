<template>
    <div id="demo1">
      <p>{{ count.count }}</p>
      <p>{{ count.todos }}</p>
      <p>{{ doneTodosCount }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name: 'demo1',
        data(){
            return{

            }
        },
        computed: {
          count () {
            return this.$store.state.count
          },
          doneTodosCount () {
            return this.$store.getters.doneTodosCount
          }
        },
        methods: {
          increment () {
            this.$store.commit({//对象风格的提交方式
              type: 'INCREMENT',
              amount: 10
            })
          },
          decrement () {
            this.$store.commit('decrement')
          }
        }
    }
</script>
