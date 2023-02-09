<template>
    <div class="middle-banner w">
        <ul>
            <li></li>
            <li><a href="#"><img src="./images/2.png" alt=""></a></li>
            <li></li>
            <li><a href="#"><img src="./images/3.png" alt=""></a></li>
            <li></li>
            <li><a href="#"><img src="./images/4.png" alt=""></a></li>
            <li></li>
            <li><a href="#"><img src="./images/5.png" alt=""></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ContainerMiddleBanner"
}
</script>

<style scoped>
.middle-banner {
    margin-top: 10px;
}

.middle-banner ul {
    height: 163px;
    background-color: #ebebeb;
}

.middle-banner li {
    float: left;
    height: 100%;
    overflow: hidden;
}

.middle-banner li:nth-child(odd) {
    width: 1px;
    height: 143px;
    margin: 10px 0;
    background-color: #dddddd;
}

.middle-banner li:nth-child(1) {
    width: 205px;
    height: 163px;
    margin: 0;
    background-image: url(./images/1.png);
}

</style>