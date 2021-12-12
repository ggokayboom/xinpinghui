<template>
  <div>
    我是Search
    <h1>所有param参数为：{{$route.params}}</h1>
    <h1>所有query参数为：{{$route.query}}</h1>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

</style>