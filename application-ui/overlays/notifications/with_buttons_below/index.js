import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100" style={{minHeight: "320px"}}>
    
  
    <div data-todo-x-show="show" data-todo-x-data="{ show: true }" className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
      
        <div data-todo-x-show="show" data-todo-x-transition-enter="transform ease-out duration-300 transition" data-todo-x-transition-enter-start="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" data-todo-x-transition-enter-end="translate-y-0 opacity-100 sm:translate-x-0" data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Notification panel, show/hide based on alert state." className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.2&amp;w=160&amp;h=160&amp;q=80" alt="">
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Emilia Gates
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Sent you an invite to connect.
                </p>
                <div className="mt-4 flex">
                  <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Accept
                  </button>
                  <button type="button" className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Decline
                  </button>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button data-todo-at-click="show = false; setTimeout(() => show = true, 1000)" className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
