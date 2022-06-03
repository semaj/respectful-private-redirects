window.browser = window.browser || window.chrome;

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    let rest = url.pathname + url.search + url.hash;
    if (rest.length > 1) {
      if (url.hostname.endsWith("reddit.com")) {
        return { redirectUrl: "https://libredd.it" + rest };
      }
      if (url.hostname.endsWith("instagram.com")) {
        return { redirectUrl: "https://bibliogram.art" + rest };
      }
      if (url.hostname.endsWith("twitter.com")) {
        return { redirectUrl: "https://nitter.net" + rest };
      }
      if (url.hostname.endsWith("youtu.be")) {
        return { redirectUrl: "https://piped.kavin.rocks" + rest };
      }
      if (url.hostname.endsWith("youtube.com")) {
        return { redirectUrl: "https://piped.kavin.rocks" + rest };
      }
      if (url.hostname.endsWith("youtube-nocookie.com")) {
        return { redirectUrl: "https://piped.kavin.rocks" + rest };
      }
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
