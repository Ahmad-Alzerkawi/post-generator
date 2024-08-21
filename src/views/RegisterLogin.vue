<script setup lang="ts">
import axios from "axios";
import { Field, Form } from "vee-validate";
import { computed } from "vue";
import { useRoute } from "vue-router";
import * as Yup from "yup";
import { setToken } from "../services/jwt-serviece";

const route = useRoute();
const authType = computed(() => route.params.type);

const validationSchema = computed(() => {
	return Yup.object().shape(
		authType.value === "register"
			? {
					email: Yup.string().email("Invalid Email").required("This field is required"),
					password: Yup.string().required("Password is required"),
					passwordConfirmation: Yup.string()
						.oneOf([Yup.ref("password"), undefined], "Passwords must match")
						.required("Password confirmation is required"),
			  }
			: {
					email: Yup.string().email("Invalid Email").required("This field is required"),
					password: Yup.string().required("Password is required"),
			  }
	);
});

const handleSubmit = () => {
	axios
		.post("auth/login", {
			email: "john@mail.com",
			password: "changeme",
		})
		.then((response) => setToken(response.data.access_token));
};
</script>

<template>
	<div class="font-[sans-serif]">
		<div class="min-h-screen flex flex-col items-center justify-center">
			<div
				class="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md"
			>
				<div class="md:max-w-md w-full px-4 py-4">
					<Form @submit="handleSubmit" :validation-schema="validationSchema">
						<div class="mb-12">
							<h3 class="text-gray-800 text-3xl font-extrabold">
								{{ authType === "register" ? "Sign Up" : "Sign in" }}
							</h3>
							<p v-if="authType !== 'register'" class="text-sm mt-4 text-gray-800">
								Don't have an account
								<router-link
									to="/auth/register"
									href="javascript:void(0);"
									class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
								>
									Register here
								</router-link>
							</p>
						</div>

						<div>
							<label class="text-gray-800 text-s block mb-2 font-semibold">Email</label>
							<div class="relative flex items-center">
								<Field
									name="email"
									type="text"
									required
									class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
									placeholder="Enter email"
								/>
							</div>
						</div>

						<div class="mt-8">
							<label class="text-gray-800 text-s block mb-2 font-semibold">Password</label>
							<div class="relative flex items-center">
								<Field
									name="password"
									type="password"
									required
									class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
									placeholder="Enter password"
								/>
							</div>
						</div>
						<div class="mt-8" v-if="authType === 'register'">
							<label class="text-gray-800 text-s block mb-2 font-semibold">Confirm Password</label>
							<div class="relative flex items-center">
								<Field
									name="passwordConfirmation"
									type="password"
									required
									class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
									placeholder="Enter password"
								/>
							</div>
						</div>

						<div class="mt-12">
							<button
								type="submit"
								class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
							>
								{{ authType === "register" ? "Sign Up" : "Sign in" }}
							</button>
						</div>
					</Form>
				</div>

				<div class="md:h-full bg[#000842] rounded-xl lg:p-12 p-8">
					<!-- <img src="https://readymadeui.com/signin-image.webp" class="w-full h-full object-contain"
                        alt="login-image" /> -->
					<img src="/Designer.png" class="w-full h-full object-contain" alt="login-image" />
				</div>
			</div>
		</div>
	</div>
</template>
