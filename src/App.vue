<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
    * {
    margin: 0;
    padding: 0;
}

.body {
    background-color: #ffffff;
}

.w {
    width: 1200px;
    margin: 0 auto;
}

li {
    list-style: none;
}

a {
    font-size: 12px;
    color: #666666;
    font-family: "songti";
    text-decoration: none;
}

input {
    outline: none;
}

@font-face {
    font-family: 'iconfont';
    src: url('./assets/styles/fonts/iconfont.ttf?t=1675938370759') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

i,
em {
    font-style: normal;
}

.iconfont {
    font-family: 'iconfont'!important;
    font-size: 12px;
    color: #666666;
}
.clearfix::before,
.clearfix::after {
    content: '';
    display: table;
    clear: both;
}
/*让button 按钮 变成小手*/
button {
    cursor: pointer;
}
</style>
