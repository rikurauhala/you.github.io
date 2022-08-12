/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Project = (props: { name: any; }): JSX.Element => {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
};

export default Project;
