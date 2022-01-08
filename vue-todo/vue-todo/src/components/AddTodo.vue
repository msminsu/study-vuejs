<template>
  <div>
    <form action="">
      <input type="text" name="title" placeholder="Add Todo...">
      <input type="text" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name : "AddTodo"
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"]{
    flex: 10;
    padding: 5px;
  }
</style>


<INPUT TYPE="NUMBER" MIN="0" MAX="10" STEP="2" VALUE="6" SIZE="6">
