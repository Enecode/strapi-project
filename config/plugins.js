module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
        sites: [
          {
            name: 'Site 1',
            id: "da388a80-c548-4722-a1de-5005865b6fb0",
            buildHook: "https://api.netlify.com/build_hooks/650ea0a1cb64f6090db9fd92",
            branch: 'main'
          }
        ]
      },
    },
  });