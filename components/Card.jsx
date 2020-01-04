import React from 'react';

export default ({ title, img }) => {
  return (
    <div
      onClick={() => window.open(img)}
      className="cursor-pointer flex items-center justify-center my-3"
    >
      <div style={{ width: '300px' }} className="max-w-sm w-full px-3">
        <div className="bg-white shadow-xl rounded-lg overflow">
          <div
            className="bg-cover bg-center h-56 p-4"
            style={{
              backgroundImage: `url(${img ||
                'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'})`
            }}
          >
            <div className="flex justify-end">
              <svg
                className="h-6 w-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
              </svg>
            </div>
          </div>
          <div className="p-4">
            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
              Company Name
            </p>
            <p className="text-3xl text-gray-900">{title || 'Title '}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
