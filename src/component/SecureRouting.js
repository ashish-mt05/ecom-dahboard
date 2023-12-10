import React from 'react'

export default function SecureRouting(props) {
  const {component} = props;
  return (
    <>
      <props.component />
    </>
  )
}
