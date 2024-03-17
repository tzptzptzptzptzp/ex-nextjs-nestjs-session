type Props = {
  email: string;
  username: string;
};

export const ProfileCard = ({ email, username }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-12 rounded-3xl shadow-lg">
      <h1 className="text-3xl text-center">Mypage</h1>
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
};
