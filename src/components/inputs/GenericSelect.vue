<template>
	<el-select
		:model-value="modelValue !== 0 ? modelValue : ''"
		@change="handleChange"
		:loading="isLoading"
		value-key="value"
		:filterable="filterable"
		:allowCreate="allowCreate"
		:reserveKeyword="reserveKeyword"
		:defaultFirstOption="defaultFirstOption"
		:class="class"
		:placeholder="placeholder"
		v-bind="inputOptions"
		:size="size"
		:multiple-limit="multipleLimit"
		:multiple="multiple"
		:collapse-tags="collapseTags"
		:disabled="disabled"
	>
		<el-option selected disabled v-if="defaultOption && options.length > 0">
			{{ defaultOption }}
		</el-option>
		<el-option
			v-for="(option, idx) in options"
			:key="option.value"
			:value="option.value"
			:label="option.label"
			v-bind="optionsBinds[idx]"
		>
			{{ option.label }}
		</el-option>
	</el-select>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import type { ElSelect, ElOption } from "element-plus";

// Define the props
const props = defineProps({
	modelValue: {
		type: [String, Number, Array, Boolean] as unknown as () =>
			| string
			| number
			| number[]
			| string[]
			| boolean
			| boolean[]
			| undefined,
		required: true,
	},
	options: {
		type: Array as () => { label: string; value: string | number | boolean | null; [key: string]: any }[],
		required: true,
	},
	isLoading: {
		type: Boolean,
	},
	placeholder: {
		type: String,
		default: "select",
	},
	filterable: {
		type: Boolean,
		default: true,
	},
	allowCreate: {
		type: Boolean,
	},
	reserveKeyword: {
		type: Boolean,
		default: true,
	},
	defaultFirstOption: {
		type: Boolean,
	},
	disabled: {
		type: Boolean,
	},
	class: {
		type: String,
	},
	inputOptions: {
		type: Object as () => Partial<typeof ElSelect>,
		default: () => ({}),
		required: false,
	},
	size: {
		type: String,
	},
	defaultOption: {
		type: String,
	},
	multiple: {
		type: Boolean,
	},
	multipleLimit: {
		type: Number,
	},
	optionsBinds: {
		type: Array as () => Partial<typeof ElOption>[],
		default: () => [],
	},
	collapseTags: {
		type: Boolean,
	},
});

// Define the emits
const emit = defineEmits(["update:modelValue", "getSelectedOption"]);

// Destructure props using toRefs
const {
	modelValue,
	options,
	isLoading,
	placeholder,
	filterable,
	allowCreate,
	reserveKeyword,
	defaultFirstOption,
	disabled,
	class: className,
	inputOptions,
	size,
	multipleLimit,
	multiple,
	collapseTags,
	defaultOption,
	optionsBinds,
} = toRefs(props);

// Handle the change event
function handleChange(value: number | number[]) {
	emit("update:modelValue", value);
	if (!Array.isArray(value)) {
		emit(
			"getSelectedOption",
			options.value.find((o) => o.value === value)
		);
	} else {
		emit(
			"getSelectedOption",
			value.map((v) => options.value.find((o) => o.value === v))
		);
	}
}
</script>
