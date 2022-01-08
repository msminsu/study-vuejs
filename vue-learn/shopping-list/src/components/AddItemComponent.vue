<template>
<div>
    <div class="input-group">
      <input type="text" v-model="newItem" v-on:keyup.enter ="addItem" class="input form-control" placeholder="add shopping list item">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @:click="addItem">Add!</button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
    data () {
      return {
        newItem: ''
      }
    },
    method : {
      addItem () {
        var text;
        text = this.newItem.trim();
        if (text) {
          this.$emit('add', this.newItem);
          this.newItem = '';
        }
      }
    }
  }
</script>
<style scoped>

</style>


