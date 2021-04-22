import clsx from 'clsx';
import styles from './DivRightImage.module.scss';

type DivRightImageProps = {
  width?: string;
  height?: string;
};

const DivRightImage: React.FC<DivRightImageProps> = ({ width = '100%', height = '200px' }) => {
  return (
    <div
      className={'row'}
      style={{
        height,
        position: 'relative',
        /*  overflow: 'hidden', */
        zIndex: 1,
        background: '#06A763',
        margin: -'33px 3px 0 0',
      }}
    >
      <div className="col-sm-6">texto</div>
      <div className={clsx('col-sm-6', styles['dynamic-image'])}>
        <div className={styles['div-image']}>
          <img src={'/image-placeholder.png'} style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default DivRightImage;
