import { Triangle, Puff } from 'react-loader-spinner';
import { Wrapper } from './Spiner.styled';

export const Spiner = () => (
  <Wrapper>
    <Triangle
      height="20"
      width="20"
      color="#8f67d1"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </Wrapper>
);

export const SpinerDelete = () => (
  <Wrapper>
    <Puff
      height="25"
      width="25"
      radius={2}
      color="#000000"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Wrapper>
);
