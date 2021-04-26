import clsx from 'clsx';

//Styles
import styles from './Text.module.scss';

type TextProps = {
  className?: string;
};

const Text: React.FC<TextProps> = ({ className = '', children }) => {
  return <span className={clsx(styles['text'], className)}>{children}</span>;
};

export default Text;
