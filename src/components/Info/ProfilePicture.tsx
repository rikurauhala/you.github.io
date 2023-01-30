import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

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
        variant="circular"
      />
    );
  }

  return (
    <Box
      alt="Profile picture"
      component="img"
      src={url}
      sx={{
        borderRadius: '50%',
        height: '200px',
        margin: '2rem 0',
        width: '200px',
      }}
      title="This is me!"
    />
  );
};

export default ProfilePicture;
