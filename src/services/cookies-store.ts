import Cookies from "js-cookie";

const STRICT_RULES: Cookies.CookieAttributes = {
	expires: 3,
	sameSite: "strict",
};

// this function will be used to abstract the logic of creating a cookie and handle set,get and clear functionality
export function createCookiesItem<T>(key: string, defaultValue: T, isStrict = true) {
	function setItem(value: T) {
		Cookies.set(key, JSON.stringify(value), isStrict ? STRICT_RULES : undefined);
	}

	function getItem(): T {
		const data = Cookies.get(key);

		return data && data !== "undefined" ? JSON.parse(data) : defaultValue;
	}

	function clearItem() {
		Cookies.remove(key);
	}

	return {
		setItem,
		getItem,
		clearItem,
	};
}
