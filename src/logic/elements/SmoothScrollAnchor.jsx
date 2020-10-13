import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const SmoothScrollAnchor = ({ href, children, className }) => {
  const smoothScrollingClick = useCallback((e) => {
    e.preventDefault();
    const element = global.document.querySelector(href);
    if (element) element.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }, [href]);
  return (<a href={href} className={className} onClick={smoothScrollingClick}>{children}</a>);
};

SmoothScrollAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SmoothScrollAnchor.defaultProps = {
  className: undefined,
};

export default SmoothScrollAnchor;
