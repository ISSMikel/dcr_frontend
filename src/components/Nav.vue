<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
    <div>
    <nav v-show="authStore.user" class="flex items-center justify-between flex-wrap bg-green-700 px-24 py-1">
        <div class="flex items-center flex-shrink-0 text-white mr-6"> </div>

        <div class="w-full">
            <div class="flex text-lg content-center">
             <router-link to="/" class="text-lg nav-item nav-link text-white hover:text-white self-center hover:bg-green-400 rounded ">Home</router-link>
            <router-link to="/users" class="text-lg nav-item nav-link text-white hover:text-white self-center hover:bg-green-400 rounded ml-36 mr-40">Users</router-link>   
            <h1 class="text-2xl text-white font-bold mt-2 w-100">Digital Correspondence Register</h1>
            <h1 class="text-lg nav-item nav-link text-white hover:text-white w-50">Logged In: {{
                        authStore.user?.username }}</h1>
               
                   <button @click="authStore.logout()" class="flex-row-reverse bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border border-gred-700 rounded">Logout</button>            
            </div>
            

            
        </div>
    </nav>    
    </div>
    
</template>