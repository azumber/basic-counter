<template>
    <div class="container w-72 h-72 shadow-2xl rounded place-self-center">
        <h1 class="text-6xl m-8 justify-center place-self-center">{{ count }}</h1>
        <div class="flex space-x-4 justify-center">
            <button @click="increase" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">INCREASE</button>
            <button @click="decrease" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >DECREASE</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Counter",
    data(){
        return{
            count: 0
        }
    },
    methods:{
        increase(){ this.count = this.count + 1 },
        decrease(){ this.count = this.count - 1 }  
    }
}
</script>
<style scoped>
.container {
    height: 150px;
    margin-top: 50px;
    margin-left: 100px;
}
</style>