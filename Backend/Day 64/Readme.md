# Helmet.js

### What is Helmet.js?

Helmet.js is a popular Node.js middleware primarily used with Express.js applications. It is a collection of smaller middleware functions that automatically set secure HTTP response headers.

### Why do we use it?

By default, Express.js does not configure essential security headers, leaving your application vulnerable to common web attacks. Helmet helps secure your application by configuring these headers to protect against:

- **Cross-Site Scripting (XSS):** Helps prevent attackers from injecting malicious scripts into your web pages.
- **Clickjacking:** Prevents your site from being put in an iframe without your permission (using `X-Frame-Options`).
- **MIME-Sniffing:** Prevents browsers from guessing the MIME type of a file (using `X-Content-Type-Options`), reducing the risk of malicious file uploads being executed.
- **Disabled Info Leakage:** Removes the `X-Powered-By` header so attackers cannot easily tell you are running Express.js.

### How to use it?

**1. Install Helmet via npm:**

```bash
npm install helmet
```

**2. Add it to your Express application:**
You typically require it and use it globally across your application before defining your routes.

```javascript
const express = require("express");
const helmet = require("helmet");

const app = express();

// Use Helmet middleware to set default security headers
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, secure world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### What attacks does Helmet.js prevent?

Helmet.js protects against a variety of web vulnerabilities by setting around **15 different secure HTTP headers**. Its primary goal is to prevent common attacks by modifying how browsers interact with your site. Here are the main attacks and vulnerabilities that Helmet.js prevents:

1.  **Cross-Site Scripting (XSS)**: By setting a Content Security Policy (using the `Content-Security-Policy` header), it dictates which dynamic resources are allowed to load, mitigating XSS injections.
2.  **Clickjacking**: The `X-Frame-Options` header (Frameguard) prevents attackers from embedding your website into an invisible iframe on an external site, fooling users into clicking things they didn't intend to.
3.  **MIME-Type Sniffing**: The `X-Content-Type-Options: nosniff` header forces browsers to respect the declared content type. This prevents attackers from uploading a malicious HTML/JavaScript file disguised as an image.
4.  **Man-in-the-Middle (MitM) & Protocol Downgrade Attacks**: The `Strict-Transport-Security` (HSTS) header forces the browser to exclusively communicate with your server over HTTPS.
5.  **Information Leakage**: The `X-Powered-By` header is removed, hiding the fact that you are running Express/Node.js.
6.  **DNS Prefetching related Tracking**: Disables browser-based DNS prefetching (`X-DNS-Prefetch-Control`) to stop unauthorized information gathering about user navigation links.
7.  **Data Leakage via Referrer**: The `Referrer-Policy` header controls how much user navigation data is passed to external sites when users click outbound links.
8.  **Malicious File Executions**: The `X-Download-Options` header is set to `noopen` to prevent old browsers from executing downloaded files directly within the site's context.
9.  **Cross-Origin Information Leaks**: Prevents loading of cross-origin resources unless explicitly permitted using the `Cross-Origin-Embedder-Policy` (COEP) header.
10. **Cross-Origin Window Attacks**: Isolates the browsing context to prevent other windows from accessing it using the `Cross-Origin-Opener-Policy` (COOP) header.
11. **Cross-Origin Resource Abuse**: Blocks other origins from reading your resources using the `Cross-Origin-Resource-Policy` (CORP) header.
12. **Cross-Domain Policy Abuse**: Restricts Adobe Flash and Acrobat PDF documents from loading data across domains via the `X-Permitted-Cross-Domain-Policies` header.
13. **Origin-level Resource Access**: Isolates the origin using the `Origin-Agent-Cluster` header to prevent process-sharing side-channel vulnerabilities like Spectre.
14. **Legacy XSS Filter Exploits**: Explicitly disables legacy browser XSS filters (setting `X-XSS-Protection: 0`) because these outdated filters can actually introduce vulnerabilities in modern environments.
15. **Certificate Transparency Violations**: (Historically covered by `Expect-CT`) Helps protect against misissued SSL certificates, though modern browsers now handle this natively.
