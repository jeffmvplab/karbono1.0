/** @type {import('next').NextConfig} */

// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//         unoptimized: true,
//     },
//     headers: async() => {
//         return [{
//             source: "/(.*)",
//             headers: [

//                 {
//                     key: "X-Frame-Options",
//                     value: "SAMEORIGIN",
//                 },
//                 // {
//                 //     key: "Content-Security-Policy",
//                 //     value: "default-src 'self'; script-src 'self' https://trustedscripts.example.com; style-src 'self' https://trustedstyles.example.com; img-src 'self' data:; connect-src 'self' https://api.example.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'self'; upgrade-insecure-requests;",
//                 // },
//                 {
//                     key: "Access-Control-Allow-Origin",
//                     value: "https://app.purelife.cloud/", // Cambia esto al dominio permitido
//                 },
//                 {
//                     key: "Access-Control-Allow-Methods",
//                     value: "GET,HEAD,PUT,PATCH,POST,DELETE",
//                 },
//                 {
//                     key: "Access-Control-Allow-Headers",
//                     value: "Content-Type, Authorization",
//                 },
//                 {
//                     key: "X-Powered-By",
//                     value: "",
//                 },
//                 {
//                     key: "X-Content-Type-Options",
//                     value: "nosniff",
//                 },
//                 {
//                     key: "Cache-Control",
//                     value: "public, max-age=0, must-revalidate",
//                 },
//                 {
//                     key: "Cache-Control",
//                     value: "no-store, no-cache, must-revalidate, proxy-revalidate",
//                 },
//                 {
//                     key: "Pragma",
//                     value: "no-cache",
//                 },
//                 {
//                     key: "Expires",
//                     value: "0",
//                 },
//                 {
//                     key: "Surrogate-Control",
//                     value: "no-store",
//                 },
//                 {
//                     key: "Cache-Control",
//                     value: "public, max-age=31536000, immutable",
//                 },
//             ],
//         }, ];
//     },
// };

// module.exports = nextConfig;

const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,

    dest: "public",
    fallbacks: {
        //image: "/static/images/fallback.png",
        document: "/", // si desea volver a una página personalizada en lugar de /_offline
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
    },
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... otras opciones que desee
});

/** @type { import('next').NextConfig } */
const nextConfig = {
    headers: async() => {
        return [{
            source: "/(.*)",
            headers: [{
                    key: "X-Frame-Options",
                    value: "SAMEORIGIN",
                },
                // {
                //     key: "Content-Security-Policy",
                //     value: "default-src 'self'; script-src 'self' https://trustedscripts.example.com; style-src 'self' https://trustedstyles.example.com; img-src 'self' data:; connect-src 'self' https://api.example.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'self'; upgrade-insecure-requests;",
                // },
                {
                    key: "Access-Control-Allow-Origin",
                    value: "https://app.purelife.cloud/", // Cambia esto al dominio permitido
                },
                {
                    key: "Access-Control-Allow-Methods",
                    value: "GET,HEAD,PUT,PATCH,POST,DELETE",
                },
                {
                    key: "Access-Control-Allow-Headers",
                    value: "Content-Type, Authorization",
                },
                {
                    key: "X-Powered-By",
                    value: "",
                },
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
                {
                    key: "Cache-Control",
                    value: "public, max-age=0, must-revalidate",
                },
                {
                    key: "Cache-Control",
                    value: "no-store, no-cache, must-revalidate, proxy-revalidate",
                },
                {
                    key: "Pragma",
                    value: "no-cache",
                },
                {
                    key: "Expires",
                    value: "0",
                },
                {
                    key: "Surrogate-Control",
                    value: "no-store",
                },
                {
                    key: "Cache-Control",
                    value: "public, max-age=31536000, immutable",
                },
            ],
        }, ];
    },
};

module.exports = withPWA(nextConfig);