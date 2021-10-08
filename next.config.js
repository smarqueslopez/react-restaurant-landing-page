module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
            publicPath: `/_next/static/images/`,
            outputPath: 'static/images'
          }
        }
      ]
    })

    return config
  }
}
