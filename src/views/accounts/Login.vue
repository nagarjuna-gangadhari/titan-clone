<template>
    <div class="flex flex-col items-center bg-gradient-to-r via-purple-500 from-orange-500 to-pink-500 w-full h-screen">
        <div class="text-cener text-2xl md:text-6xl font-extrabold text-white pt-14">Welcome back to {{title}}</div>
        <div class="login w-full h-full flex items-center justify-center">
            <div class="w-11/12 md:w-4/12 bg-white shadow-md rounded p-8 flex flex-col">
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="form-group mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Username</label>
                    <Field name="username" type="text" class="form-control shadow appearance-none border border-blue-100 rounded w-full py-2 px-3 text-grey-darker" :class="{ 'border-red-500': errors.username }" />
                    <div class="invalid-feedback text-xs text-pink-400">{{errors.username}}</div>
                </div>            
                <div class="form-group mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Password</label>
                    <Field name="password" type="password" class="form-control shadow appearance-none border border-blue-100 rounded w-full py-2 px-3 text-grey-darker" :class="{ 'is-invalid': errors.password }" />
                    <div class="invalid-feedback text-xs text-pink-400mb-3">{{errors.password}}</div>
                </div>
                <div v-if="errors.apiError" class="alert alert-danger text-red-500 text-center my-2">Wrong Username or Password</div>            
                <div class="form-group flex items-center justify-center">
                    <button class="bg-green-400 hover:scale-120 font-bold py-2 px-20 rounded" :disabled="isSubmitting">
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        Login
                    </button>
                </div>
                <div class="flex flex-col md:flex-row justify-evenly items-center text-center mt-2">
                    <div class="text-center">
                    <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/account/sign-up">Create an Account!</a>
                </div>
                <div>
                    <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/account/reset-password">Forgot passwoed</a>
                </div>

                </div>
                
            </Form>
            </div>
        </div>
    </div>
</template>



<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useAuthStore} from "@/stores";


const title = import.meta.env.VITE_APP_TITLE;


const schema = Yup.object().shape({
    username: Yup.string().required('Missing Username'),
    password: Yup.string().required('Missing Password')
});

function onSubmit(values, { setErrors }) {
    const { login } = useAuthStore();
    const { username, password } = values;
    return login(username, password)
        .catch(error => setErrors({ apiError: error }));
}

</script>