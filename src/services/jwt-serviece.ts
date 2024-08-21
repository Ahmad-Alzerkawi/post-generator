import { createCookiesItem } from "./cookies-store";
export const {
	setItem: setToken,
	getItem: getToken,
	clearItem: removeToken,
} = createCookiesItem<string | undefined>("ACCESS_TOKEN", undefined);
