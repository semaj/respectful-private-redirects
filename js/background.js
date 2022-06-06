window.browser = window.browser || window.chrome;

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    let rest = url.pathname + url.search + url.hash;
    if (rest.length > 1) {
      console.log(rest)
      if (url.hostname.endsWith("reddit.com")) {
        return { redirectUrl: "https://libredd.it" + rest };
      }
      if (url.hostname.endsWith("instagram.com")) {
        if (rest.length > 2 && rest[1] == "p" && rest[2] == "/") {
          return { redirectUrl: "https://bibliogram.art" + rest };
        } else {
          return { redirectUrl: "https://bibliogram.art/u" + rest };
        }
      }
      if (url.hostname.endsWith("twitter.com")) {
        return { redirectUrl: "https://nitter.net" + rest };
      }
    }
  },
  {
    urls: [
      "*://*.instagram.com/*",
      "*://*.twitter.com/*",
      "*://*.reddit.com/*"
    ],
  },
  ["blocking"],
);
