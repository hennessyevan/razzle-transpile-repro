module.exports = {
  modify: (config, { target, dev }, webpack) => {
    delete config.externals

    return config
  },
}
