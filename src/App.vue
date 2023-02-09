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
    font-family: 'icomoon';
    src: url('./assets/fonts/icomoon.eot?tomleg');
    src: url('./assets/fonts/icomoon.eot?tomleg#iefix') format('embedded-opentype'),
        url('./assets/fonts/icomoon.ttf?tomleg') format('truetype'),
        url('./assets/fonts/icomoon.woff?tomleg') format('woff'),
        url('./assets/fonts/icomoon.svg?tomleg#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

i,
em {
    font-style: normal;
}

.iconfont {
    font-family: 'icomoon';
    font-size: 12px;
    color: #666666;
}
</style>
