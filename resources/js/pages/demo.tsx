import { Head } from "@inertiajs/react";
import * as React from "react";

import { DemoProps } from "../types/demo";

export default function Demo({ laravelVersion, phpVersion }: DemoProps) {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Head title="Demo" />

      <div className="py-12">
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            className="mx-5 transform rounded-md bg-blue-600 px-4 py-3 text-white shadow-lg outline-none transition-transform hover:ring-4 active:scale-75"
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          You clicked {count} times
        </p>

        <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right">
          Laravel v{laravelVersion} (PHP v{phpVersion})
        </div>
      </div>
    </>
  );
}
