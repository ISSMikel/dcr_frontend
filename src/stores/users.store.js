import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useUsersStore = defineStore({
    id: 'user',
    state: () => ({
        users: {},
        user: {},
        name: {},
        email: {},
        password: {},
        password_confirmation: {},
    }),
    actions: {
        async register(name, email, password, password_confirmation) {
            // Get CSRF Cookie
            await axios.get(`${baseUrl}/sanctum/csrf-cookie`);

            await axios.post(`${baseUrl}/register`, { name, email, password, password_confirmation });
        },
        async getAll() {
            this.users = { loading: true };
            try {
                this.users = await axios.get(baseUrl);
            } catch (error) {
                this.users = { error };
            }
        },
        async getById(id) {
            this.user = { loading: true };
            try {
                this.user = await axios.get(`${baseUrl}/${id}`);
            } catch (error) {
                this.user = { error };
            }
        },
        async update(id, params) {
            await axios.put(`${baseUrl}/${id}`, params);

            // update stored user if the logged in user updated their own record
            const authStore = useAuthStore();
            if (id === authStore.user.id) {
                // update local storage
                const user = { ...authStore.user, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                // update auth user in pinia state
                authStore.user = user;
            }
        },
        async delete(id) {
            // add isDeleting prop to user being deleted
            this.users.find(x => x.id === id).isDeleting = true;

            await axios.delete(`${baseUrl}/${id}`);

            // remove user from list after deleted
            this.users = this.users.filter(x => x.id !== id);

            // auto logout if the logged in user deleted their own record
            const authStore = useAuthStore();
            if (id === authStore.user.id) {
                authStore.logout();
            }
        }
    }
});
