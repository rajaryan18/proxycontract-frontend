/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.(jpe?g|png|sol|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
        type: 'asset/resource',
        generator: {
            filename: 'static/chunks/[path][name].[hash][ext]'
        },
    });

    return config;
}
}

module.exports = nextConfig
