import clsx from 'clsx';

//Styles
import styles from './ColSmImage.module.scss';

const ColSmImage: React.FC<{}> = () => {
  return (
    <div className={clsx('col-sm-6', styles['dynamic-image'])}>
      <div className={styles['div-image']}>
        <img
          src={'/profile.jpg'}
          style={{ height: 'inherit', width: 'inherit', objectFit: 'scale-down', objectPosition: 'right' }}
          alt="Profile Image"
        />
      </div>
    </div>
  );
};

export default ColSmImage;
