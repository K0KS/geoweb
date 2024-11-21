const contentfulConfig = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID,
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN,
    preview_access_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  },
  previewSecret: process.env.CONTENTFUL_PREVIEW_SECRET || 'secret',
  downloadAssets: process.env.CONTENTFUL_DOWNLOAD_ASSETS === 'true',
  defaultLocale: 'en-US',
  previewHost: process.env.CONTENTFUL_PREVIEW_HOST || null,
};

module.exports = contentfulConfig;
