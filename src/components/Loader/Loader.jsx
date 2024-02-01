import { Hourglass } from 'react-loader-spinner';
import { WrapperOfLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapperOfLoader>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </WrapperOfLoader>
  );
};
