require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/DiffyAI.github.io", // Replace this with your repository name

  siteMetadata: {
    siteUrl: "https://gatsbykontent-aihomepage.gatsbyjs.io/", // Update this if needed for your actual GitHub Pages URL
    title: "Gatsby Kontent.ai Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Kontent.ai",
  },
  plugins: [
    {
      resolve: `@kontent-ai/gatsby-source`,
      options: {
        projectId: process.env.KONTENT_PROJECT_ID,
        languageCodenames: [`en-US`],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Kontent.ai Homepage",
        short_name: "Gatsby",
        start_url: "/",
        background_color: "#41D9C5",
        theme_color: "#231F20",
        icon: "src/favicon.png",
      },
    },
  ],
};
