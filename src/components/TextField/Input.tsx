import { forwardRef, JSX, Ref } from 'react';

export type InputProps = JSX.IntrinsicElements['input'];

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  return <input {...props} ref={ref} />;
};

export default forwardRef(Input);
