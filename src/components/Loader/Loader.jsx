import React from 'react';
import { Puff } from 'react-loader-spinner';
import { LoaderBox, LoaderItem } from './Loader.styled';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => {
  return (
    <>
      <br />
      <LoaderBox>
        <LoaderItem>
          <Puff
            height="80"
            width="80"
            radisu={1}
            color="#183ed6"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </LoaderItem>
      </LoaderBox>
    </>
  );
};
