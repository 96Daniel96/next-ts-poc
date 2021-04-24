import clsx from 'clsx';
import styles from './ColSmImage.module.scss';

const ColSmImage: React.FC<{}> = () => {
  return (
    <div className={clsx('col-sm-6', styles['dynamic-image'])}>
      <div className={styles['div-image']}>
        <img src={'/image-placeholder.png'} style={{ height: '100%' }} />
      </div>
    </div>
  );
};

export default ColSmImage;
