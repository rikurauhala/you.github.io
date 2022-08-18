import { Skeleton } from '@mui/material';

const ProfilePicture = ({ url }: { url: string }): JSX.Element => {
  const style = {
    backgroundColor: '#5e707a',
    color: '#5e707a',
    height: '200px',
    margin: '2rem auto',
    width: '200px'
  };

  if (url === 'avatar_url') {
    return (
      <Skeleton
        style={style}
        variant='circular'
      />
    );
  }

  return (
    <img
      alt='Profile picture'
      className='picture'
      src={url}
      title='This is me!'
    />
  );
};

export default ProfilePicture;
