import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const ProfilePicture = ({ url }: { url: string }): JSX.Element => {
  const size = '200px';

  const styleSkeleton = {
    backgroundColor: '#5e707a',
    color: '#5e707a',
    height: size,
    margin: '2rem auto',
    width: size,
  };

  const styleProfilePicture = {
    borderRadius: '50%',
    height: size,
    margin: '2rem 0',
    width: size,
  };

  if (url === 'avatar_url') {
    return (
      <Skeleton
        style={styleSkeleton}
        variant="circular"
      />
    );
  }

  return (
    <Box
      alt="Profile picture"
      component="img"
      src={url}
      sx={styleProfilePicture}
      title="This is me!"
    />
  );
};

export default ProfilePicture;
