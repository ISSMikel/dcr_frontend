<template>
    <!-- Add Modal -->
    <div class="flex flex-row-reverse pr-10">
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn bg-green-400 " onclick="my_modal_1.showModal()">Add Filing Area</button>
        <dialog id="my_modal_1" class="modal">
            <div class="modal-action">
                <form>
                    <div class="rounded-xl bg-white text-center border shadow-2xl">
                        <div class="p-2">
                            <div class="">
                                <h1 class="mb-10 text-2xl font-bold">Filing Area Info Form</h1>
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="name">Filing Area Name</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72 "
                                    aria-describedby="emailHelp" name="name"
                                    v-model="filing_areaForm.name">
                            </div>

                        </div>
                        <div class="flex justify-around pb-2">

                            <button type="button"
                                class=" btn bg-red-500 hover:bg-red-600 transition-all duration-200  text-white rounded-lg p-2"
                                onclick="my_modal_1.close()">Close</button>

                            <button type="button"
                                class="btn bg-blue-500 hover:bg-blue-600 transition-all duration-200  text-white rounded-lg p-2"
                                @click="createFilingAreaInfo()">
                                Submit
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </dialog>
    </div>

    <!-- Edit Modal -->
    <div class="flex flex-row-reverse pr-10">
        <!-- Open the modal using ID.showModal() method -->

        <dialog id="my_modal_2" class="modal">
            <div class="modal-action">
                <form>
                    <div class="rounded-xl bg-white text-center border shadow-2xl">
                        <div class="p-2">
                            <div class="">
                                <h1 class="mb-10 text-2xl font-bold">Filing Area Eidt Form</h1>
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="Name">Filing_Area Name</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72 "
                                    aria-describedby="emailHelp" name="Name"
                                    v-model="currentfiling_area.name">
                            </div>

                        </div>
                        <div class="flex justify-around pb-2">

                            <button type="button"
                                class=" btn bg-red-500 hover:bg-red-600 transition-all duration-200  text-white rounded-lg p-2"
                                onclick="my_modal_2.close()">Close</button>

                            <button type="button"
                                class="btn bg-blue-500 hover:bg-blue-600 transition-all duration-200  text-white rounded-lg p-2"
                                @click="updateFilingAreaInfo()">
                                Update
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </dialog>
    </div>

    <div class="p-2">
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Filing Area Info"
                checked="checked" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                <EasyDataTable :headers="CorrespondenceHeaders" :items="filing_areaInfo">
                    <template
                        #item-navUrl="{ id, name }">
                        <div class="flex">
                            <button class="btn bg-green-400"
                                @click="setcurrentFilingArea({ id, name })">Edit</button>

                            <button class="btn bg-red-400" @click="deleteFilingAreaInfo(id)">Delete</button>
                        </div>
                    </template>

                </EasyDataTable>

            </div>

        </div>


    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores';
import axios from "axios";
import _ from "lodash";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// const authStore = useAuthStore();
// const { user } = storeToRefs(authStore);

export default {
    components: { EasyDataTable: window['vue3-easy-data-table'] },

    methods: {

        // Get Correspondence Info
        async getFilingAreaInfo() {
            const { user } = useAuthStore();
            // console.log(user);
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/filing-area`, config
                );
                console.log(response);
                this.filing_areaInfo = response.data.data

                // console.log(this.correspondenceInfo)

            } catch (e) {

                console.log(e)
            }

        },

        async setcurrentFilingArea(value) {
            this.currentfiling_area = {
                id: value.id,
                name: value.name,


            }
            my_modal_2.showModal()

        },



        // Create Correspondence Info
        async createFilingAreaInfo() {

            console.log(this.filing_areaForm)

            const { user } = useAuthStore();
            // console.log(user.token);
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/filing-area`,
                    this.filing_areaForm,
                    config
                );

                my_modal_1.close()

                this.getFilingAreaInfo()

                console.log(response)

            } catch (e) {

                console.log(e)
            }


        },

        // Update Correspondence Info
        async updateFilingAreaInfo() {
            const { user } = useAuthStore();
            console.log('Hello')
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.put(
                    `${import.meta.env.VITE_API_URL}/filing-area/${this.currentfiling_area.id}`,
                    this.currentfiling_area,
                    config
                );
                my_modal_2.close()

                this.getFilingAreaInfo()
                // console.log(response)

            } catch (e) {

                console.log(e)
            }
        },

        //Delete Get Correspondence Info
        async deleteFilingAreaInfo(id) {
            const { user } = useAuthStore();

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            try {
                const response = await axios.delete(
                    `${import.meta.env.VITE_API_URL}/filing_area/${id}`,
                    config
                );
                this.getFilingAreaInfo()
                // console.log(response)

            } catch (e) {
                console.log(e)
            }
        },

    },
    created() {
        this.getFilingAreaInfo()
    },

    data() {
        return {

            CorrespondenceHeaders: [
                { text: "ID", value: "id", width:200 },
                { text: "NAME", value: "name"},
                { text: "OPTIONS", value: "navUrl", width: 50 },
            ],

            filing_areaInfo: [],
            

            currentfiling_area: {},

            filing_areaForm: {
                name: "",
            },




        }
    }
}

</script>

<style></style>