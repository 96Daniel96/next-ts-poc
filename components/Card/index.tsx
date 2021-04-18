import clsx from 'clsx';
import styles from './styles.module.scss';

type CardProps = {
  title: string;
};

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className={clsx('container', styles['card'])}>
      <div className={'row'}>
        <div className={clsx('col', styles['col-title'])}>
          <span>{title}</span>
        </div>
      </div>
      <div className={'row'}>
        <div className={clsx('col', styles['col-content'])}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>
    </div>
  );
};

export default Card;
