function createUrlProxy({
  hashResolver,
  dataCollector,
  urlResolver,
  cssVariable
}) {
  return {
    proxy({ url: originalUrl, type, data, collectPreload, init }) {
      const hash = hashResolver.resolve({ cssVariable, data, originalUrl, type });
      const url = urlResolver.resolve(hash);
      dataCollector.collect({
        url: originalUrl,
        hash,
        preload: collectPreload ? { url, type } : null,
        data,
        init
      });
      return url;
    }
  };
}
export {
  createUrlProxy
};
