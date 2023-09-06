import { ThreeDots } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#660000"
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
  />
)}
