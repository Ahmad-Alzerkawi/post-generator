<template>
	<div>
		<Field :name="name" v-slot="{ value, handleChange }">
			<GenericSelect
				:size="size"
				class="w-100"
				:options="options"
				:placeholder="placeholder"
				:model-value="value"
				@update:model-value="
					(v: any) => {
						handleChange(v);
						emit('getValues', v);
					}
				"
				:defaultOption="defaultOption"
				:inputOptions="inputOptions"
				:multiple="multiple"
				:filterable="filterable"
				:allowCreate="allowCreate"
				:reserveKeyword="reserveKeyword"
				:defaultFirstOption="defaultFirstOption"
				:multipleLimit="multipleLimit"
				:collapseTags="collapseTags"
				:isLoading="isLoading"
				:disabled="disabled"
				:readonly="disabled"
				:clearable="clearable"
			/>
		</Field>
		<ErrorMessage class="text-danger" :name="name" />
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { ErrorMessage, Field } from "vee-validate";
import GenericSelect from "./GenericSelect.vue";

export default defineComponent({
	name: "ElSelectField",
	props: {
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: "",
		},
		options: {
			type: Array as () => { label: string; value: string | number | boolean | null; [key: string]: any }[],
			required: true,
		},
		defaultOption: {
			type: String,
			default: "",
		},
		inputOptions: {
			type: Object,
			default: () => ({}),
			required: false,
		},
		multiple: {
			type: Boolean,
		},
		filterable: {
			type: Boolean,
		},
		allowCreate: {
			type: Boolean,
		},
		reserveKeyword: {
			type: Boolean,
		},
		defaultFirstOption: {
			type: Boolean,
		},
		multipleLimit: {
			type: Number,
		},
		collapseTags: {
			type: Boolean,
		},
		size: {
			type: String as () => "small" | "medium" | "large",
			default: "medium",
		},
		isLoading: {
			type: Boolean,
		},
		disabled: {
			type: Boolean,
		},
		readonly: {
			type: Boolean,
		},
		clearable: {
			type: Boolean,
		},
	},
	emits: ["update:modelValue", "getValues"],
	components: {
		GenericSelect,
		Field,
		ErrorMessage,
	},
	setup(props, { emit }) {
		const {
			name,
			placeholder,
			options,
			defaultOption,
			inputOptions,
			multiple,
			filterable,
			allowCreate,
			reserveKeyword,
			defaultFirstOption,
			multipleLimit,
			collapseTags,
			size,
			isLoading,
			disabled,
			clearable,
		} = toRefs(props);

		return {
			name,
			placeholder,
			options,
			defaultOption,
			inputOptions,
			multiple,
			filterable,
			allowCreate,
			reserveKeyword,
			defaultFirstOption,
			multipleLimit,
			collapseTags,
			size,
			isLoading,
			disabled,
			clearable,
			emit,
		};
	},
});
</script>
