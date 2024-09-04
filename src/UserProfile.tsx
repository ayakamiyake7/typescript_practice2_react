import { FC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dt>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dt>
  );
};
