<template>
    <!-- Add Modal -->
    <div class="flex flex-row-reverse pr-10">
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn bg-green-400 " onclick="my_modal_1.showModal()">Add Correspondence</button>
        <dialog id="my_modal_1" class="modal">
            <div class="modal-action">
                <form>
                    <div class="rounded-xl bg-white text-center border shadow-2xl">
                        <div class="p-2">
                            <div class="">
                                <h1 class="mb-10 text-2xl font-bold">DCR Info Form</h1>
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="fileNumber">File Number</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72 "
                                    aria-describedby="emailHelp" name="fileNumber"
                                    v-model="correspondenceForm.fileNumber">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="subject">Subject</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="subject" v-model="correspondenceForm.subject">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-2 pr-8 text-left mt-2" for="receivedFrom">From Whom
                                        Received</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="receivedFrom"
                                    v-model="correspondenceForm.receivedFrom">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-10 w-40  " for="areaOfFiling">Area of Filing</label>
                                </div>
                                <select class="border border-black p-2 rounded-lg mb-4 ml-4 w-72"
                                    aria-label="Default select example" name="areaOfFiling"
                                    v-model="correspondenceForm.filing_area_id">
                                    <option value="default">
                                        Please choose an option
                                    </option>
                                    <option v-for="item in filing_areaInfo" :key="item.id" :value="item.id">

                                        {{ item.name }}


                                    </option>
                                </select>

                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="correspondenceDate">Date of
                                        Letter</label>
                                </div>
                                <input type="date" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="correspondenceDate"
                                    v-model="correspondenceForm.correspondenceDate">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="dateReceived">Date of Receipt</label>
                                </div>
                                <input type="date" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="dateReceived"
                                    v-model="correspondenceForm.dateReceived">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="sentDate">Date Sent</label>
                                </div>
                                <input type="date" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="sentDate" v-model="correspondenceForm.sentDate">
                            </div>

                            <div class="flex  text-lg ">
                                <div class="font-bold">
                                    <label class="ml-2 pr-12 w-42 text-left mt-2"
                                        for="comments">Remarks/Comments</label>
                                </div>
                                <textarea type="text" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="comments"
                                    v-model="correspondenceForm.comments" />
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="flagged">Flagged</label>
                                </div>
                                <input type="checkbox" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="flagged" v-model="correspondenceForm.flagged">
                            </div>
                        </div>
                        <div class="flex justify-around pb-2">

                            <button type="button"
                                class=" btn bg-red-500 hover:bg-red-600 transition-all duration-200  text-white rounded-lg p-2"
                                onclick="my_modal_1.close()">Close</button>

                            <button type="button"
                                class="btn bg-blue-500 hover:bg-blue-600 transition-all duration-200  text-white rounded-lg p-2"
                                @click="createCorrespondenceInfo()">
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
                                <h1 class="mb-10 text-2xl font-bold">DCR Edit Form</h1>
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="fileNumber">File Number</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72 "
                                    aria-describedby="emailHelp" name="fileNumber"
                                    v-model="currentCorrespondence.fileNumber">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="subject">Subject</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="subject" v-model="currentCorrespondence.subject">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-2 pr-8 text-left mt-2" for="receivedFrom">From Whom
                                        Received</label>
                                </div>
                                <input type="text" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="receivedFrom"
                                    v-model="currentCorrespondence.receivedFrom">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-10 w-40  " for="areaOfFiling">Area of Filing</label>
                                </div>
                                <select class="border border-black p-2 rounded-lg mb-4 ml-4 w-72"
                                    aria-label="Default select example" name="areaOfFiling"
                                    v-model="currentCorrespondence.filing_area_id">
                                    <option value="default">
                                        Please choose an option
                                    </option>
                                    <option v-for="item in filing_areaInfo" :key="item.id" :value="item.id">

                                        {{ item.name }}


                                    </option>
                                </select>

                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="correspondenceDate">Date of
                                        Letter</label>
                                </div>
                                <input type="date" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="correspondenceDate"
                                    v-model="currentCorrespondence.correspondenceDate">
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="dateReceived">Date of Receipt</label>
                                </div>
                                <input type="date" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="dateReceived"
                                    v-model="currentCorrespondence.dateReceived">
                            </div>
                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="sentDate">Date Sent</label>
                                </div>
                                <input type="date" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="sentDate"
                                    v-model="currentCorrespondence.sentDate">
                            </div>

                            <div class="flex  text-lg ">
                                <div class="font-bold">
                                    <label class="ml-2 pr-12 w-42 text-left mt-2"
                                        for="comments">Remarks/Comments</label>
                                </div>
                                <textarea type="text" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="comments"
                                    v-model="currentCorrespondence.comments" />
                            </div>

                            <div class="flex text-lg ">
                                <div class="font-bold">
                                    <label class="ml-16 w-40 text-left mt-2" for="flagged">Flagged</label>
                                </div>
                                <input type="checkbox" class="border border-black p-2 rounded-lg mb-4 w-72"
                                    aria-describedby="emailHelp" name="flagged" true-value="1" false-value="0"
                                    v-model="currentCorrespondence.flagged">
                            </div>
                        </div>
                        <div class="flex justify-around pb-2">

                            <button type="button"
                                class=" btn bg-red-500 hover:bg-red-600 transition-all duration-200  text-white rounded-lg p-2"
                                onclick="my_modal_2.close()">Close</button>

                            <button type="button"
                                class="btn bg-blue-500 hover:bg-blue-600 transition-all duration-200  text-white rounded-lg p-2"
                                @click="updateCorrespondenceInfo()">
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
            <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Correspondence Info"
                checked="checked" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div class="mb-2">
                    <h1 class=" text-center text-xl mb-2 bg-teal-700 py-2 text-white rounded">Correspondence List
                    </h1>


                    <div class="text-right">
                        <span class="font-bold">Search: </span>
                        <input class="rounded border" type="text" v-model="searchValue">
                    </div>
                </div>
                <EasyDataTable :headers="CorrespondenceHeaders" :items="correspondenceInfo" :search-value="searchValue">
                    <template
                        #item-navUrl="{ id, fileNumber, subject, receivedFrom, filing_area_id, correspondenceDate, dateReceived, sentDate, comments, flagged }">
                        <div class="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path></svg>
                            <button class="btn bg-green-400"
                                @click="setcurrentCorrespondence({ id, fileNumber, subject, receivedFrom, filing_area_id, correspondenceDate, dateReceived, sentDate, comments, flagged })">Edit</button>

                            <button class="btn bg-red-400" @click="deleteCorrespondenceInfo(id)">Delete</button>

                            
                        </div>
                    </template>

                </EasyDataTable>

            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Recently Updated" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                <EasyDataTable :headers="headers" :items="items" />

            </div>

            <!-- <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 3
            </div> -->
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
        async getCorrespondenceInfo() {
            const { user } = useAuthStore();
            // console.log(user);
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/correspondence`, config
                );
                // console.log(response);
                this.correspondenceInfo = response.data.data

            } catch (e) {

                console.log(e)
            }

        },

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
                // console.log(response);

                // console.log(response.data.data[0].name);

                this.filing_areaInfo = response.data.data

                console.log(this.filing_areaInfo)

            } catch (e) {

                console.log(e)
            }

        },


        async setcurrentCorrespondence(value) {
            console.log(value)
            this.currentCorrespondence = {
                id: value.id,
                fileNumber: value.fileNumber,
                subject: value.subject,
                receivedFrom: value.receivedFrom,
                sentDate: value.sentDate,
                filing_area_id: value.filing_area_id,
                correspondenceDate: value.correspondenceDate,
                dateReceived: value.dateReceived,
                comments: value.comments,
                flagged: value.flagged

            }
            my_modal_2.showModal()


        },



        // Create Correspondence Info
        async createCorrespondenceInfo() {

            console.log(this.correspondenceForm)

            const { user } = useAuthStore();
            // console.log(user.token);
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/correspondence`,
                    this.correspondenceForm,
                    config
                );

                my_modal_1.close()

                this.getCorrespondenceInfo()

                console.log(response)

            } catch (e) {

                console.log(e)
            }


        },

        // Update Correspondence Info
        async updateCorrespondenceInfo() {
            const { user } = useAuthStore();
            console.log('Hello')
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.put(
                    `${import.meta.env.VITE_API_URL}/correspondence/${this.currentCorrespondence.id}`,
                    this.currentCorrespondence,
                    config
                );
                my_modal_2.close()

                this.getCorrespondenceInfo()
                // console.log(response)

            } catch (e) {

                console.log(e)
            }
        },

        //Delete Get Correspondence Info
        async deleteCorrespondenceInfo(id) {
            const { user } = useAuthStore();

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            try {
                const response = await axios.delete(
                    `${import.meta.env.VITE_API_URL}/correspondence/${id}`,
                    config
                );
                this.getCorrespondenceInfo()
                // console.log(response)

            } catch (e) {
                console.log(e)
            }
        },

    },
    created() {
        this.getCorrespondenceInfo()
        this.getFilingAreaInfo()
    },

    data() {
        return {

            CorrespondenceHeaders: [
                { text: "ID", value: "id" },
                { text: "DATE OF RECEIPT", value: "dateReceived" },
                { text: "DATE OF LETTERS", value: "correspondenceDate" },
                { text: "DATE SENT", value: "sentDate" },
                { text: "FILING AREA", value: "filing_area.name" },
                { text: "FROM WHOM RECEIVED", value: "receivedFrom" },
                { text: "SUBJECT", value: "subject" },
                { text: "FILE NUMBER", value: "fileNumber" },
                { text: "REMARKS/COMMENTS", value: "comments" },
                { text: "OPTIONS", value: "navUrl", width: 50 },
            ],
            CorrespondenceInfoData: [
                {
                    dateReceived: "25/07/2024", correspondenceDate: "25/07/2024", receivedFrom: "Ms. Vanessa Richards",
                    subject: 'National Health Services Accreditation Authority of T&T', fileNumber: "National Health Services Accreditation Authority of T&T",
                    comments: "directed by PM to Ms. Richards for action on July 12, 2024"
                },

                {
                    dateReceived: "25/07/2024", correspondenceDate: "04/07/2024", receivedFrom: "Sec. to Cabinet",
                    subject: 'Ms. Lisa Lashley, and Ms. Andrea Walcott ftp Aug. 3, 2023 to Aug. 2, 2024', fileNumber: "Forwarding Form",
                    comments: ""
                },
            ],

            correspondenceInfo: [],
            filing_areaInfo:[],

            currentCorrespondence: {},
            searchValue: "",

            correspondenceForm: {
                fileNumber: "",
                subject: "",
                receivedFrom: "",
                filing_area_id: "",
                correspondenceDate: "",
                dateReceived: "",
                sentDate: "",
                comments: "",
                flagged: false

            },



            headers: [
                { text: "DATE OF RECEIPT", value: "dateReceived" },
                { text: "DATE OF LETTERS", value: "correspondenceDate" },
                { text: "FROM WHOM RECEIVED", value: "receivedFrom" },
                { text: "SUBJECT", value: "subject" },
                { text: "FILE NUMBER", value: "fileNumber" },
                { text: "REMARKS/COMMENTS", value: "comments" },
                { text: "NAV", value: "nav", width: 50 },

            ],

            items: [
                {
                    dateReceived: "25/07/2024", correspondenceDate: "25/07/2024", receivedFrom: "Ms. Vanessa Richards",
                    subject: 'National Health Services Accreditation Authority of T&T', fileNumber: "National Health Services Accreditation Authority of T&T",
                    comments: "directed by PM to Ms. Richards for action on July 12, 2024", nav: ''
                },

                {
                    dateReceived: "25/07/2024", correspondenceDate: "04/07/2024", receivedFrom: "Sec. to Cabinet",
                    subject: 'Ms. Lisa Lashley, and Ms. Andrea Walcott ftp Aug. 3, 2023 to Aug. 2, 2024', fileNumber: "Forwarding Form",
                    comments: "", nav: ''
                },
            ],

        }

    }
}


// const headers = [
//     { text: "DATE OF RECEIPT", value: "dateReceived" },
//     { text: "DATE OF LETTERS", value: "correspondenceDate" },
//     { text: "FROM WHOM RECEIVED", value: "receivedFrom" },
//     { text: "SUBJECT", value: "subject" },
//     { text: "FILE NUMBER", value: "fileNumber" },
//     { text: "REMARKS/COMMENTS", value: "comments" },
//     { text: "NAV", value: "nav", width: 50 },

// ];

// const items = [
//     {
//         dateReceived: "25/07/2024", correspondenceDate: "25/07/2024", receivedFrom: "Ms. Vanessa Richards",
//         subject: 'National Health Services Accreditation Authority of T&T', fileNumber: "National Health Services Accreditation Authority of T&T",
//         comments: "directed by PM to Ms. Richards for action on July 12, 2024", nav: ''
//     },

//     {
//         dateReceived: "25/07/2024", correspondenceDate: "04/07/2024", receivedFrom: "Sec. to Cabinet",
//         subject: 'Ms. Lisa Lashley, and Ms. Andrea Walcott ftp Aug. 3, 2023 to Aug. 2, 2024', fileNumber: "Forwarding Form",
//         comments: "", nav: ''
//     },
// ];



</script>

<style lang="css">
/* body {
    height: 100vh;
    background: #b13d3d;
} */
</style>
