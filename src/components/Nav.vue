<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
    <div>
        <nav v-show="authStore.user" class="flex items-center justify-between flex-wrap bg-teal-700 px-24 py-1">
            <div class="flex items-center flex-shrink-0 text-white mr-6"> </div>

            <div class="w-full">
                <div class="flex items-center justify-between">
                    <div class="flex space-x-4 ">
                        <router-link to="/"
                            class=" text-lg nav-item nav-link text-white hover:text-white self-center hover:bg-teal-400 rounded ">Home</router-link>
                        <router-link to="/filing"
                            class=" text-lg nav-item nav-link text-white hover:text-white self-center text-center hover:bg-teal-400 rounded ">Filing
                            Area</router-link>
                    </div>
                    <!-- <router-link to="/users" class="text-lg nav-item nav-link text-white hover:text-white self-center hover:bg-green-400 rounded ml-36 mr-40">Users</router-link>    -->
                    <h1 class="text-2xl text-white font-bold ">Digital Correspondence Register</h1>
                <div class="flex">
                    <h1 class="text-lg nav-item nav-link text-white hover:text-white ">Logged In: {{
                        authStore.user?.user.name }}</h1>

                    <button @click="authStore.logout()"
                        class="bg-red-800 hover:bg-red-400 text-white font-semibold  py-2 px-2 rounded">Logout</button>
                </div
                
                ></div>



            </div>
        </nav>
    </div>

</template>