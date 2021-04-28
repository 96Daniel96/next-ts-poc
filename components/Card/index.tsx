import clsx from 'clsx';

//Styles
import styles from './styles.module.scss';

type CardProps = {
  title?: string;
  maxWidth?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, maxWidth, className, children }) => {
  return (
    <div className={clsx('container', styles['card'], className)} style={{ maxWidth }}>
      {title && (
        <div className={'row'}>
          <div className={clsx('col', styles['col-title'])}>
            <h1>{title}</h1>
          </div>
        </div>
      )}
      <div className={clsx('row', styles['col-children'])}>{children}</div>
    </div>
  );
};

export default Card;
