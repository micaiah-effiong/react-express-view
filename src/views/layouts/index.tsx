import React, { PropsWithChildren } from 'react';
export default function DefaultLayout(
  props: PropsWithChildren<{ title: string }>
) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
