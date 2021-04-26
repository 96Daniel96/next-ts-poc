import clsx from 'clsx';

//Styles
import styles from './styles.module.scss';

type CardProps = {
  title?: string;
  maxWidth?: string;
};

const Card: React.FC<CardProps> = ({ title, maxWidth, children }) => {
  return (
    <div className={clsx('container', styles['card'])} style={{ maxWidth }}>
      {title && (
        <div className={'row'}>
          <div className={clsx('col', styles['col-title'])}>
            <span>{title}</span>
          </div>
        </div>
      )}
      <div className={clsx('row', styles['col-children'])}>{children}</div>
    </div>
  );
};

export default Card;
