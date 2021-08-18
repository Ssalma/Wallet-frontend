<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap");
$font-family: Inter;
body {
  font-family: $font-family;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
