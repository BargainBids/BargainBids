<template>
    <div class="products">
        <div class="profilebuttons">
            <button class="profilebutton">Sell a product</button>
            <button class="profilebutton">Liked products</button>
            <button class="profilebutton">Notifications🔔</button>
        </div>
        <div class="productsection">
            <h1>My products</h1>
        </div>
    </div>

</template>


<style scoped lang="scss">
.products {
    display: flex;
    flex-direction: column;
    color:black;
    border: 3px solid red;
    width: 50%;
}
.profilebuttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 3px solid rgb(0, 255, 115);
    width: 100%;
}

.profilebuttons button {
    background-color: rgb(0, 255, 115);
    border: 3px solid rgb(0, 255, 115);
    border-radius: 10px;
    padding: 5px;
    font-size: 1.5rem;
    font-weight: 400;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    cursor: pointer;
}
.productsection {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border: 3px solid rgb(0, 255, 115);
    padding-top: 2%;
}
</style>
