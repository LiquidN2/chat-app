import { FC } from 'react';

import {
  MessageContainerTarget,
  MessageContainerSelf,
  UserAvatar,
  MessageTextTarget,
  MessageTextSelf,
} from './Message.styles';

interface MessageProps {
  type: 'self' | 'target';
  user: any;
}

const Message: FC<MessageProps> = ({ type = 'self', user, children }) => {
  if (!children) return null;

  if (type === 'target')
    return (
      <MessageContainerTarget>
        <UserAvatar src={user.avatar} alt={user.name} />
        <MessageTextTarget>{children}</MessageTextTarget>
      </MessageContainerTarget>
    );

  return (
    <MessageContainerSelf>
      <MessageTextSelf>{children}</MessageTextSelf>
      <UserAvatar src={user.avatar} alt={user.name} />
    </MessageContainerSelf>
  );
};

export default Message;
