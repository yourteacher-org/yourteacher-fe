import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  width?: string;
  postfix?: ReactNode;
}

const Input = forwardRef(
  ({ width, postfix, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="inline-flex px-6 py-3 bg-white rounded-full border border-black has-[:focus]:border-gray-1 gap-3">
        <input
          className={`w-[${width}] border-none outline-none`}
          ref={ref}
          {...props}
        />
        {postfix}
      </div>
    );
  },
);

export default Input;
