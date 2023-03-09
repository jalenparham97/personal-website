import clsx from 'clsx';
import { forwardRef, HTMLInputTypeAttribute } from 'react';

interface Props {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  classNames?: { input?: string; label?: string; root?: string };
  type?: HTMLInputTypeAttribute;
  [x: string]: any;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  {
    label = '',
    placeholder = '',
    id = '',
    classNames,
    name = '',
    type = 'text',
    ...otherProps
  }: Props,
  ref
) {
  return (
    <div className={clsx('space-y-1', classNames?.root)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'block font-medium text-zinc-900 dark:text-white',
            classNames?.label
          )}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        ref={ref}
        placeholder={placeholder}
        className={clsx(
          'block w-full rounded-md border-gray-300 dark:border-zinc-700 dark:text-white shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm',
          classNames?.input
        )}
        {...otherProps}
      />
    </div>
  );
});
