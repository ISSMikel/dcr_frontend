<template>
    <!-- Add Modal -->
    <div class="flex flex-row-reverse pr-10">
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn bg-green-400 " onclick="my_modal_1.showModal()">Add Correspondence</button>
        <dialog id="my_modal_1" class="modal">
            <div class="mb-96">
                <form @click="createCorrespondenceInfo()">
                    <div class="flex justify-center py-5">
                        <div class="p-5 rounded-xl bg-white max-w-2xl flex-1 text-center border shadow-2xl">
                            <div class="grid grid-cols-3 place-items-center ">
                                <div class=" col-span-3">
                                    <h1 class=" mb-10 text-2xl font-bold">DCR Info Form</h1>
                                </div>
                                <div class="font-bold text-lg ">
                                    <label class="text-left" for="fileNumber">File Number</label>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" class="border border-black p-2 rounded-lg mb-4 w-96 "
                                        aria-describedby="emailHelp" name="fileNumber">
                                </div>
                                <div class="font-bold text-lg">
                                    <label for="subject">Subject</label>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" class="border border-black p-2 rounded-lg mb-4 w-96"
                                        aria-describedby="emailHelp" name="subject">
                                </div>
                                <div class="font-bold text-lg">
                                    <label for="subject">From Whom Received</label>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" class="border border-black p-2 rounded-lg mb-4 w-96"
                                        aria-describedby="emailHelp" name="fromWhomReceived">
                                </div>
                                <div class="font-bold text-lg">
                                    <label for="areaOfFiling">Area of Filing</label>
                                </div>
                                <div class="col-span-2">
                                    <select class="w-96 border border-black p-2 rounded-lg mb-4"
                                        aria-label="Default select example" name="areaOfFiling">
                                        <option value="letters">Letters</option>
                                        <option value="invitation">Invitation</option>
                                        <option value="temp_file">Temp File</option>
                                        <option value="file">File</option>
                                        <option value="cabinet_file">Cabinet File</option>
                                        <option value="note_for_cabinet">Note for Cabinet</option>
                                        <option value="draft_note_for_cabinet">DRAFT Note for Cabinet</option>
                                        <option value="ministerial_minutes">Ministerial Minutes</option>
                                        <option value="performance_appraisals">Performance Appraisals (PAR)</option>
                                        <option value="Prime_ministers_mails">Prime ministers' mails</option>
                                        <option value="registry_mails">Registry Mails</option>
                                        <option value="contractual_agreement">Contractual Agreement</option>
                                        <option value="memo">Memo</option>
                                        <option value="private_confidential">Private/Confidential</option>
                                        <option value="national_security_council_secretariat">National Security Council
                                            Secretariat (NSCS) </option>
                                        <option value="form">Form</option>
                                        <option value="miscellaneous">Miscellaneous</option>
                                    </select>
                                </div>
                                <div class="font-bold text-lg">
                                    <label for="dateOfLetters"> Date of Letter</label>
                                </div>
                                <div class="col-span-2">
                                    <input type="date" class="border border-black p-2 rounded-lg mb-4 "
                                        aria-describedby="emailHelp" name="dateOfLetters">
                                </div>
                                <div class="font-bold text-lg">
                                    <label for="dateOfReceipt">Date of Receipt</label>
                                </div>
                                <div class="col-span-2">
                                    <input type="date" class="border border-black p-2 rounded-lg mb-4 "
                                        aria-describedby="emailHelp" name="dateOfReceipt">
                                </div>
                                <div class="font-bold text-lg">
                                    <label for="remarksComments">Remarks/Comments</label>
                                </div>
                                <div class="col-span-2">
                                    <textarea type="text" class="border border-black p-2 rounded-lg mb-4 w-96 h-20"
                                        aria-describedby="emailHelp" name="remarksComments" />
                                </div>
                            </div>
                            <div class="flex justify-around">
                                <button
                                    class="bg-red-500 hover:bg-red-600 transition-all duration-200  text-white rounded-lg p-2">Close</button>

                                <button @click="createCorrespondenceInfo()" type="submit"
                                    class="bg-blue-500 hover:bg-blue-600 transition-all duration-200  text-white rounded-lg p-2">
                                    Submit
                                </button>
                            </div>
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

                <EasyDataTable :headers="CorrespondenceHeaders" :items="correspondenceInfo" />

                    <template #item-navUrl="{}">
                        <!-- Edit Modal -->
                        <div class="flex flex-row-reverse pr-10">
                            <!-- Open the modal using ID.showModal() method -->
                            <button class="btn bg-green-400" onclick="my_modal_2.showModal()">Edit</button>
                            <dialog id="my_modal_2" class="modal">
                                <div class="mb-96">
                                    <form @click="handleInfoSubmit()">
                                        <div class="flex justify-center py-5">
                                            <div
                                                class="p-5 rounded-xl bg-white max-w-2xl flex-1 text-center border shadow-2xl">
                                                <div class="grid grid-cols-3 place-items-center ">
                                                    <div class=" col-span-3">
                                                        <h1 class=" mb-10 text-2xl font-bold">DCR Edit Form</h1>
                                                    </div>
                                                    <div class="font-bold text-lg ">
                                                        <label class="text-left" for="fileNumber">File Number</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <input type="text"
                                                            class="border border-black p-2 rounded-lg mb-4 w-96 "
                                                            aria-describedby="emailHelp" name="fileNumber">
                                                    </div>
                                                    <div class="font-bold text-lg">
                                                        <label for="subject">Subject</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <input type="text"
                                                            class="border border-black p-2 rounded-lg mb-4 w-96"
                                                            aria-describedby="emailHelp" name="subject">
                                                    </div>
                                                    <div class="font-bold text-lg">
                                                        <label for="subject">From Whom Received</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <input type="text"
                                                            class="border border-black p-2 rounded-lg mb-4 w-96"
                                                            aria-describedby="emailHelp" name="fromWhomReceived">
                                                    </div>
                                                    <div class="font-bold text-lg">
                                                        <label for="areaOfFiling">Area of Filing</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <select class="w-96 border border-black p-2 rounded-lg mb-4"
                                                            aria-label="Default select example" name="areaOfFiling">
                                                            <option value="letters">Letters</option>
                                                            <option value="invitation">Invitation</option>
                                                            <option value="temp_file">Temp File</option>
                                                            <option value="file">File</option>
                                                            <option value="cabinet_file">Cabinet File</option>
                                                            <option value="note_for_cabinet">Note for Cabinet</option>
                                                            <option value="draft_note_for_cabinet">DRAFT Note for
                                                                Cabinet</option>
                                                            <option value="ministerial_minutes">Ministerial Minutes
                                                            </option>
                                                            <option value="performance_appraisals">Performance
                                                                Appraisals (PAR)</option>
                                                            <option value="Prime_ministers_mails">Prime ministers' mails
                                                            </option>
                                                            <option value="registry_mails">Registry Mails</option>
                                                            <option value="contractual_agreement">Contractual Agreement
                                                            </option>
                                                            <option value="memo">Memo</option>
                                                            <option value="private_confidential">Private/Confidential
                                                            </option>
                                                            <option value="national_security_council_secretariat">
                                                                National Security Council
                                                                Secretariat (NSCS) </option>
                                                            <option value="form">Form</option>
                                                            <option value="miscellaneous">Miscellaneous</option>
                                                        </select>
                                                    </div>
                                                    <div class="font-bold text-lg">
                                                        <label for="dateOfLetters"> Date of Letter</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <input type="date"
                                                            class="border border-black p-2 rounded-lg mb-4 "
                                                            aria-describedby="emailHelp" name="dateOfLetters">
                                                    </div>
                                                    <div class="font-bold text-lg">
                                                        <label for="dateOfReceipt">Date of Receipt</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <input type="date"
                                                            class="border border-black p-2 rounded-lg mb-4 "
                                                            aria-describedby="emailHelp" name="dateOfReceipt">
                                                    </div>
                                                    <div class="font-bold text-lg">
                                                        <label for="remarksComments">Remarks/Comments</label>
                                                    </div>
                                                    <div class="col-span-2">
                                                        <textarea type="text"
                                                            class="border border-black p-2 rounded-lg mb-4 w-96 h-20"
                                                            aria-describedby="emailHelp" name="remarksComments" />
                                                    </div>
                                                </div>
                                                <div class="flex justify-around">
                                                    <button
                                                        class="bg-red-500 hover:bg-red-600 transition-all duration-200  text-white rounded-lg p-2">Close</button>

                                                    <button @click="handleInfoSubmit()" type="submit"
                                                        class="bg-blue-500 hover:bg-blue-600 transition-all duration-200  text-white rounded-lg p-2">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </dialog>
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

                // console.log(this.correspondenceInfo)

            } catch (e) {

                console.log(e)
            }

        },


        // Create Correspondence Info
        async createCorrespondenceInfo() {
            const { user } = useAuthStore();

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/correspondence`, config
                );

                console.log(response)

            } catch (e) {

                console.log(e)
            }
        }
    },
    // Update Correspondence Info
    async updateCorrespondenceInfo() {
        const { user } = useAuthStore();

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/correspondence`, config
            );

            // console.log(response)

        } catch (e) {

            console.log(e)
        }
    },

    //Delete Get Correspondence Info
    async deleteCorrespondenceInfo() {
        const { user } = useAuthStore();

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/correspondence`, config
            );

            // console.log(response)

        } catch (e) {

            console.log(e)
        }
    },
    created() {
        this.getCorrespondenceInfo()
    },

    data() {
        return {

            CorrespondenceHeaders: [
                { text: "DATE OF RECEIPT", value: "dateReceived" },
                { text: "DATE OF LETTERS", value: "correspondenceDate" },
                { text: "FROM WHOM RECEIVED", value: "receivedFrom" },
                { text: "SUBJECT", value: "subject" },
                { text: "FILE NUMBER", value: "fileNumber" },
                { text: "REMARKS/COMMENTS", value: "comments" },
                { text: "NAV", value: "navUrl", width: 50 },
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
