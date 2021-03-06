import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

//Styles
import styles from './SocialButton.module.scss';

type SocialButtonProps = {
  onClick: () => void;
  className?: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ onClick, className, children }) => {
  return (
    <div className={clsx(styles['social-button'], className)}>
      <IconButton aria-label="delete" onClick={onClick}>
        {children}
      </IconButton>
    </div>
  );
};

export default SocialButton;
