import { defineStore } from 'pinia';
import axios from "axios";
// import { fetchWrapper } from '@/helpers';
import { router } from '@/router';
import { useAlertStore } from '@/stores';

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
        async login(email, password, datasource) {
            try {
                // Get CSRF Cookie
                await axios.get(`${baseUrl}/sanctum/csrf-cookie`);

                // Login...
                const user = await axios.post(`${baseUrl}/login`, {
                    email, password, datasource,
                });

                // update pinia state
                this.user = user;

                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

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
