<template>
  <div class="loading">
    <h1>Please Wait</h1>
    <p><slot/></p>
    <img src="http://habboemotion.com/resources/images/icons/progress_habbos.gif">
  </div>
</template>

<style scoped>
.loading {
  float: left;
  margin-left: 2.5%;
  margin-top: 2.5%;
}
</style>
