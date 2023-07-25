import React from 'react';
import DefaultLayout from './layouts/default';

export default function HelloMessage(props: { title: string; name: string }) {
  return (
    <DefaultLayout title={props.title}>
      <div>Hello {props.name}</div>
    </DefaultLayout>
  );
}
