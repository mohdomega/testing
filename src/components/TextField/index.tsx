import { Ref } from 'react';

import Stack from '@/components/Stack';
import Typography from '@/components/Typography';
import { cn, omit } from '@/lib';

import Input, { InputProps } from './Input';
import TextArea, { TextAreaProps } from './TextArea';

interface InputType extends InputProps {
  component?: 'input';
  ref?: Ref<HTMLInputElement>;
}

interface TextAreaType extends TextAreaProps {
  component: 'textarea';
  ref?: Ref<HTMLTextAreaElement>;
}

type Props = {
  label?: string;
  name: string;
  id: string;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * @default false
   */
  error?: boolean;
  helperText?: string | string[];
  className?: string;
};

export type TextFieldProps = (InputType | TextAreaType) & Props;

// TODO: design for disabled state
export default function TextField({
  label,
  name,
  disabled,
  error,
  helperText,
  className,
  ...props
}: TextFieldProps) {
  return (
    <Stack className="gap-2 w-full">
      {label && (
        <Typography component="label" htmlFor={name} variant="subtitle" className={cn('font-medium')}>
          {label}
        </Typography>
      )}

      {props.component === 'textarea' ? (
        <TextArea
          {...omit(props, 'ref')}
          ref={props.ref}
          name={name}
          disabled={disabled}
          className={cn(
            'px-4 py-3 text-md border border-black/10 rounded-xl text-secondary focus-visible:outline-secondary max-sm:text-sm',
            { 'focus-visible:outline-red-500 border-red-500': error },
            className
          )}
        />
      ) : (
        <Input
          {...omit(props, 'ref')}
          ref={props.ref}
          name={name}
          disabled={disabled}
          className={cn(
            'px-4 py-3 text-md border border-black/10 rounded-xl text-secondary focus-visible:outline-secondary placeholder:font-light max-sm:text-sm',
            { 'focus-visible:outline-red-500 border-red-500': error },
            className
          )}
        />
      )}

      {helperText && Array.isArray(helperText) ? (
        <Stack className="gap-0.5">
          {helperText.map((string, index) => (
            <Typography
              key={index}
              variant="small"
              className={cn(error ? 'text-red-500' : 'text-primary-dark')}
            >
              {string}
            </Typography>
          ))}
        </Stack>
      ) : (
        <Typography variant="small" className={cn(error ? 'text-red-500' : 'text-primary-dark')}>
          {helperText}
        </Typography>
      )}
    </Stack>
  );
}
