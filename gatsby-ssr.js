const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-analytics-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-QX5N1VYV6W"
    />,
    <script
      key="google-analytics-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QX5N1VYV6W');
        `,
      }}
    />,
  ])
}
