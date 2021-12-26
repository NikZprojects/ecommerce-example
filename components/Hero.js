export default function Example() {
  return (
    <div className="">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Welcome to an Example:</span>
          <span className="block text-indigo-500">Shopify store.</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Here is some text.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Open Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
