import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import { Text } from 'shared/UI/Text/Text';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, isLoading, comment } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton border='50%' height={30} width={30} />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={cls.text} height={50} width='100%' />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment?.user?.avatar ? (
          <Avatar size={30} src={comment?.user?.avatar} />
        ) : null}
        <Text title={comment?.user?.username} />
      </div>
      <Text className={cls.text} text={comment?.text} />
    </div>
  );
});
