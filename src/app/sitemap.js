export default function sitemap() {
  const baseUrl = "https://www.hindu-rashtra-nirmaan-sangh.in/";

  const routes = [
    "",
    "/about",
    "/contact",
    "/motivation",
    "/states",
    "/certificate",
    "/success",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}