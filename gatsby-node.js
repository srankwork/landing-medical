exports.createPages = async ({ actions: { createPage } }) => {
  const allServices = ['hair-transplant','botox','dermal','laser-hair-removal','pdo-threads'];


  allServices.forEach((service) => {
    createPage({
      path: `/${service}/`,
      component: require.resolve('./src/pages/index.js'),
      context: {}
    });
  });
};