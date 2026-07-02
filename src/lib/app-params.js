"use client";
const isNode = typeof window === 'undefined';
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;

const toSnakeCase = (str) => {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
	if (isNode) {
		return defaultValue;
	}
	const storageKey = `base44_${toSnakeCase(paramName)}`;
	const urlParams = new URLSearchParams(window.location.search);
	const searchParam = urlParams.get(paramName);
	if (removeFromUrl) {
		urlParams.delete(paramName);
		const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""
			}${window.location.hash}`;
		window.history.replaceState({}, document.title, newUrl);
	}
	if (searchParam) {
		storage.setItem(storageKey, searchParam);
		return searchParam;
	}
	if (defaultValue) {
		storage.setItem(storageKey, defaultValue);
		return defaultValue;
	}
	const storedValue = storage.getItem(storageKey);
	if (storedValue) {
		return storedValue;
	}
	return null;
}

const getAppParams = () => {
	if (getAppParamValue("clear_access_token") === 'true') {
		storage.removeItem('base44_access_token');
		storage.removeItem('token');
	}

	const currentHref = isNode ? undefined : window.location.href;

	// Sanitise from_url: only accept same-origin paths to prevent open redirect.
	// An attacker could supply ?from_url=https://evil.com; we reject anything
	// that is not a relative path starting with '/'.
	const rawFromUrl = getAppParamValue("from_url", { defaultValue: currentHref });
	const safeFromUrl = (!rawFromUrl || rawFromUrl.startsWith('/'))
		? rawFromUrl
		: currentHref;

	return {
		appId: getAppParamValue("app_id", { defaultValue: process.env.NEXT_PUBLIC_BASE44_APP_ID }),
		token: getAppParamValue("access_token", { removeFromUrl: true }),
		fromUrl: safeFromUrl,
		functionsVersion: getAppParamValue("functions_version", { defaultValue: process.env.NEXT_PUBLIC_BASE44_FUNCTIONS_VERSION }),
		appBaseUrl: getAppParamValue("app_base_url", { defaultValue: process.env.NEXT_PUBLIC_BASE44_APP_BASE_URL }),
	}
}


export const appParams = {
	...getAppParams()
}

export const isBase44Configured = Boolean(
	appParams.appId && appParams.appId !== 'null' && appParams.appBaseUrl
);
