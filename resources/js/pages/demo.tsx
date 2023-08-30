import { Head } from '@inertiajs/react';
import * as React from 'react';

import { DemoProps } from '../types/demo';

export default function Demo({ laravelVersion, phpVersion }: DemoProps) {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Head title='Demo' />

      <div className='py-12'>
        <div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
        <p className='mt-10 text-center text-sm text-gray-500'>You clicked {count} times</p>

        <div className='ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right'>
          Laravel v{laravelVersion} (PHP v{phpVersion})
        </div>
      </div>
    </>
  );
}
