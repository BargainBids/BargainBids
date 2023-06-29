<template>
        <div class="revenuebox">
            <div class="revenuetitle">
                <h1>Revenue: 0,-</h1>
            </div>
            <div>
            </div>
            <div class="mockgraph"></div>
        </div>
</template>


<style scoped lang="scss">
.revenuebox {
    display: flex;
    flex-direction: column;
    color:black;
    border: 3px solid red;
    width: 50%;
}
.revenuetitle {
    border: 3px solid rgb(0, 255, 115);
    display: flex;
    justify-content: center;
}
.mockgraph {
    border: 3px solid rgb(3, 1, 15);
    height: 500px;
    background-color: rgb(0, 255, 115);
}
</style>
