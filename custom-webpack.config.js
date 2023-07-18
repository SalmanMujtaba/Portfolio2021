module.exports = {
  plugins: [
    new(require('webpack')).DefinePlugin({
      'process.env.EMAIL_JS_TEMPLATE_ID': JSON.stringify(process.env.EMAIL_JS_TEMPLATE_ID),
      'process.env.EMAIL_JS_PUBLIC_KEY': JSON.stringify(process.env.EMAIL_JS_PUBLIC_KEY),
      'process.env.EMAIL_JS_NAME': JSON.stringify(process.env.EMAIL_JS_NAME),
      'process.env.EMAIL_JS_SERVICE_ID': JSON.stringify(process.env.EMAIL_JS_SERVICE_ID)
    }),
  ],
};