import { defineStore } from 'pinia';
import axios from "axios";
// import { fetchWrapper } from '@/helpers';
import { router } from '@/router';
import { useAlertStore } from '@/stores';
import { data } from 'autoprefixer';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(email, password, database) {
            try {
                // Get CSRF Cookie
                await axios.get(`http://127.0.0.1:8000/sanctum/csrf-cookie`);

                // Login...
                const user = await axios.post(`${baseUrl}/login`, {
                    email, password, database,
                });

                console.log(user)

                // update pinia state
                this.user = user.data;
                // console.log(user.data.token);

                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user.data));

                // redirect to previous url or default to home page
                router.push(this.returnUrl || '/');
            } catch (error) {
                const alertStore = useAlertStore();
                alertStore.error(error);
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/account/login');
        }
    }
});
