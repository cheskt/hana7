import { PropsWithChildren } from 'react';

export default function MorningTemplate({ children }: PropsWithChildren) {
  return (
    <div className='border border-red-500 m-1 p-1'>
      <h1>Morning Template</h1>
      <div>{children}</div>
    </div>
  );
}
