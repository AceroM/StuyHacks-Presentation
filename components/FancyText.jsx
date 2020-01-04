import React from 'react';
import styled from 'styled-components';

const ML = h1`
  position: relative;
  font-weight: 900;
  font-size: 3.7em;
`;

const TextWrapper = styled.span`
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
`;

const Letters = styled.span``;

const FancyText = () => {
  return (
    <h1 class="ml7">
      <span class="text-wrapper">
        <span class="letters">Reality is broken</span>
      </span>
    </h1>
  );
};

export default FancyText;
