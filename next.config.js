module.exports = {
  reactStrictMode: true,
  redirects: async () => [{
    source: "/",
    destination: "/myip",
    permanent: true
  }]
}
