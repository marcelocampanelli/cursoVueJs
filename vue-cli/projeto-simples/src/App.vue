<template>
    <div id="app">
      {{ titulo }}
      <button @click="titulo += '#'"
> Add</button>
    </div>
</template>

<script >
export default{
  data: function(){
    return{
      titulo: 'Teste Data Usando VueJS !!'
    }
  }
}
</script>


<style >
  #app{
    background-color:chocolate ;
    color: white
  }


</style>