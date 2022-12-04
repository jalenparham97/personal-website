import clsx from 'clsx';
import { forwardRef } from 'react';

interface Props {
  label?: string;
  placeholder?: string;
  id?: string;
  classNames?: { input?: string; label?: string; root?: string };
  rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  function Textarea(
    { label = '', placeholder = '', id = '', classNames, rows = 3 }: Props,
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
        <textarea
          name={id}
          id={id}
          rows={rows}
          ref={ref}
          placeholder={placeholder}
          className={clsx(
            'block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm',
            classNames?.input
          )}
        />
      </div>
    );
  }
);
