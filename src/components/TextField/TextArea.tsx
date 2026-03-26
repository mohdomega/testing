import { forwardRef, JSX, Ref } from 'react';

export type TextAreaProps = JSX.IntrinsicElements['textarea'];

const TextArea = (props: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
  return <textarea {...props} ref={ref} />;
};

export default forwardRef(TextArea);
