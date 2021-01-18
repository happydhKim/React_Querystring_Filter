import * as React from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import type {FC} from 'react';

const Main: FC = () => {
  const textState = atom({
    key: 'textState',
    default: '',
  });

  return (
    <>
      test
    </>
  );
};

export default Main;
