//Styles
import styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  title: string;
  progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ title, progress }) => {
  return (
    <div className={styles['progress-bar']}>
      <div className="d-flex justify-content-between">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>
      <div className={styles['bar-background']}>
        <div style={{ width: progress + '%' }} className={styles['bar']} />
      </div>
    </div>
  );
};

export default ProgressBar;
