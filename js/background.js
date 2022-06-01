window.browser = window.browser || window.chrome;

browser.webRequest.onBeforeRequest.addListener(
	(details) => {
		const url = new URL(details.url);
		if (url.hostname.endsWith("youtu.be") && url.pathname.length > 1) {
			return { redirectUrl: "https://piped.kavin.rocks/watch?v=" + url.pathname.substr(1) };
		}
        if (url.hostname.endsWith("youtube.com") && url.pathname.length > 1) {
            return { redirectUrl: "https://piped.kavin.rocks/watch?v=" + url.pathname.substr(1) };
        }
        if (url.hostname.endsWith("youtube-nocookie.com") && url.pathname.length > 1) {
            return { redirectUrl: "https://piped.kavin.rocks/watch?v=" + url.pathname.substr(1) };
        }
        let rest = url.pathname + url.search + url.hash;
        if (url.hostname.endsWith("reddit.com")) {
            return { redirectUrl: "https://libredd.it" + rest };
        }
        if (url.hostname.endsWith("instagram.com")) {
            return { redirectUrl: "https://bibliogram.art" + rest };
        }
        if (url.hostname.endsWith("twitter.com")) {
            return { redirectUrl: "https://nitter.net" + rest };
        }
	},
	{
      urls: [
        "*://youtu.be/*",
        "*://*.youtube.com/*",
        "*://*.youtube-nocookie.com/*",
        "*://*.instagram.com/*",
        "*://*.twitter.com/*",
        "*://*.reddit.com/*"
      ],
	},
	["blocking"],
);
