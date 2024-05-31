<template>


    <div class = "BookContainer">
        <img :src="imageURL" alt = "Book Image" class = "book-image" />
        <div class = "bookinfos">
        <h3>{{ title }}</h3>
        <p>{{ author }}</p>  
                                
        </div> 

    </div>
    
</template>

<style scoped>

img {
    height: 100%;
        
    }
.BookContainer {
    width: 70%;
    border: 1px solid red;
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
}


</style>



<script setup> 

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    title:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
    }
})
</script>