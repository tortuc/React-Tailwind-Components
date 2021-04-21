import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="px-4 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      Job Postings
    </h3>
    <div className="mt-3 sm:mt-0 sm:ml-4">
      <label htmlFor="search_candidate" className="sr-only">Search</label>
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
          </div>
          <input type="text" name="search_candidate" id="search_candidate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300" placeholder="Search">
          <input type="text" name="search_candidate" id="search_candidate" className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300" placeholder="Search candidates">
        </div>
        <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/sort-ascending" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path>
</svg>
          <span className="ml-2">Sort</span>
          <svg className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
        </button>
      </div>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
