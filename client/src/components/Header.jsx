import React from 'react';
import { string } from 'prop-types';

const Header = ({
  id,
  header,
  buttonLabel,
  subtitle,
  buttonId,
}) => (
  <div id={id}>
    <div>{header}</div>
    <div>{subtitle}</div>
    <button id={buttonId} type="button">{buttonLabel}</button>
  </div>
);

Header.propTypes = {
  id: string.isRequired,
  header: string.isRequired,
  subtitle: string.isRequired,
  buttonId: string.isRequired,
  buttonLabel: string.isRequired,
};

export default Header;
