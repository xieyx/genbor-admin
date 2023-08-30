import { Head } from '@inertiajs/react';
import * as React from 'react';

import { DemoProps } from './Demo';

export default function Demo({ laravelVersion, phpVersion }: DemoProps) {
  return (
    <>
      <Head title='Demo' />

      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='text-3xl font-bold underline'>hello world!</div>
          </div>
        </div>

        <div className='ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0'>
          Laravel v{laravelVersion} (PHP v{phpVersion})
        </div>
      </div>
    </>
  );
}
