import React from 'react';
export default function DefaultLayout(props) {
    return (<html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>);
}
