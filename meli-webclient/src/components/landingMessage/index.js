import React from 'react';
import './landingMessage.scss';
export default function LandingMessage(props) {
  const { message } = props;
  return <div className="landing-message">{message}</div>;
}
