export default function robots() {
  const baseUrl = "https://www.hindu-rashtra-nirmaan-sangh.in/";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}