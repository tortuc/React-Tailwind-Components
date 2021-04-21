import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div style={{minHeight: "768px"}}>
    
  <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
    <!-- Top nav-->
    <header data-todo-x-data="{ open: false }" data-todo-at-keydown-window-escape="open = false" className="flex-shrink-0 relative h-16 bg-white flex items-center">
      {/* Logo area */}
      <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
        <a href="/" className="flex items-center justify-center h-16 w-16 bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
        </a>
      </div>

      {/* Picker area */}
      <div className="mx-auto lg:hidden">
        <div className="relative">
          <label htmlFor="inbox-select" className="sr-only">Choose inbox</label>
          <select id="inbox-select" className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600">
            <option value="/open">Open</option>
            <option value="/archived">Archived</option>
            <option value="/assigned">Assigned</option>
            <option value="/flagged">Flagged</option>
            <option value="/spam">Spam</option>
            <option value="/drafts">Drafts</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
            <svg className="h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
          </div>
        </div>
      </div>

      {/* Menu button area */}
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden">
        {/* Mobile menu button */}
        <button type="button" className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600" data-todo-at-click="open = true">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
        </button>
      </div>

      {/* Desktop nav area */}
      <div className="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
            <label htmlFor="search" className="sr-only">Search all inboxes</label>
            <input id="search" type="search" placeholder="Search all inboxes" className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
              <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
            </div>
          </div>
        </div>
        <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <nav aria-label="Global" className="flex space-x-10">
            
              
                <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative text-left">
                  <button type="button" className="flex items-center text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" id="menu-1" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                    <span>Inboxes</span>
                    <svg className="ml-1 h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                  </button>

                  
                    <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-30 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-1">
                      <div className="py-1" role="none">
                        
                          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                              Technical Support
                            </a>
                        
                          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                              Sales
                            </a>
                        
                          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                              General
                            </a>
                        
                      </div>
                    </div>
                  
                </div>
              
              
                <a href="/" className="text-sm font-medium text-gray-900">Reporting</a>
              
              
                <a href="/" className="text-sm font-medium text-gray-900">Settings</a>
              
          </nav>
          <div className="flex items-center space-x-8">
            <span className="inline-flex">
              <a href="/" className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
              </a>
            </span>

            <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
              <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" id="menu-2" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
              </button>

              
                <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-2">
                  <div className="py-1" role="none">
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Your Profile
                      </a>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Sign Out
                      </a>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
      
        <div data-todo-x-show="open" className="fixed inset-0 z-40 lg:hidden" data-todo-x-ref="dialog" role="dialog" aria-modal="true">
          
            <div data-todo-x-show="open" data-todo-x-transition-enter="transition-opacity ease-linear duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="transition-opacity ease-linear duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state." className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" data-todo-at-click="open = false" aria-hidden="true"></div>
          

          
            <nav data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300" data-todo-x-transition-enter-start="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100" data-todo-x-transition-enter-end="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100" data-todo-x-transition-leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300" data-todo-x-transition-leave-start="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100" data-todo-x-transition-leave-end="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100" data-todo-x-description="Mobile menu, toggle classes based on menu state." className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg" aria-label="Global">
              <div className="h-16 flex items-center justify-between px-4 sm:px-6">
                <a href="/">
                  <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&amp;shade=400" alt="Workflow">
                </a>
                <button type="button" className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600" data-todo-at-click="open = false">
                  <span className="sr-only">Close main menu</span>
                  <svg className="block h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                </button>
              </div>
              <div className="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                <div className="relative text-gray-400 focus-within:text-gray-500">
                  <label htmlFor="search" className="sr-only">Search all inboxes</label>
                  <input id="search" type="search" placeholder="Search all inboxes" className="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600">
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                    <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </div>
              <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                
                  <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Inboxes</a>
                  
                    <a href="/" className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100">Technical Support</a>
                  
                    <a href="/" className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100">Sales</a>
                  
                    <a href="/" className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100">General</a>
                  
                
                  <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Reporting</a>
                  
                
                  <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Settings</a>
                  
                
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="text-base font-medium text-gray-800 truncate">Whitney Francis</div>
                    <div className="text-sm font-medium text-gray-500 truncate">whitneyfrancis@example.com</div>
                  </div>
                  <a href="/" className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
                  </a>
                </div>
                <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                  
                    <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50">Your Profile</a>
                  
                    <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50">Sign out</a>
                  
                </div>
              </div>
            </nav>
          
        </div>
      
    </header>

    {/* Bottom section */}
    <div className="min-h-0 flex-1 flex overflow-hidden">
      <!-- Narrow sidebar-->
      <nav aria-label="Sidebar" className="hidden lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto">
        <div className="relative w-20 flex flex-col p-3 space-y-3">
          
            <a href="/" className="bg-gray-900 text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
              <span className="sr-only">Open</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
</svg>
            </a>
          
            <a href="/" className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
              <span className="sr-only">Archive</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/archive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
</svg>
            </a>
          
            <a href="/" className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
              <span className="sr-only">Customers</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/user-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
            </a>
          
            <a href="/" className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
              <span className="sr-only">Flagged</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/flag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
</svg>
            </a>
          
            <a href="/" className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
              <span className="sr-only">Spam</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/ban" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
</svg>
            </a>
          
            <a href="/" className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
              <span className="sr-only">Drafts</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/pencil-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
</svg>
            </a>
          
        </div>
      </nav>

      {/* Main area */}
      <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <section aria-labelledby="message-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last">
          {/* Top section */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200">
            <!-- Toolbar-->
            <div className="h-16 flex flex-col justify-center">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="py-3 flex justify-between">
                  {/* Left buttons */}
                  <div>
                    <span className="relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3">
                      <span className="inline-flex sm:shadow-sm">
                        <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <svg className="mr-2.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                          <span>Reply</span>
                        </button>
                        <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <svg className="mr-2.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
                          <span>Note</span>
                        </button>
                        <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <svg className="mr-2.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/user-add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
</svg>
                          <span>Assign</span>
                        </button>
                      </span>

                      <span className="hidden lg:flex space-x-3">
                        <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <svg className="mr-2.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/archive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
  <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path>
</svg>
                          <span>Archive</span>
                        </button>
                        <button type="button" className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <svg className="mr-2.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/folder-download" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v4m0 0l-2-2m2 2l2-2"></path>
</svg>
                          <span>Move</span>
                        </button>
                      </span>

                      <span data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="-ml-px relative block sm:shadow-sm lg:hidden">
                        <div>
                          <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3" id="menu-3" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only sm:hidden">More</span>
                            <span className="hidden sm:inline">More</span>
                            <svg className="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                          </button>
                        </div>

                        
                          <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-3">
                            <div className="py-1" role="none">
                              <a href="/" className="block sm:hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  Note
                                </a>
                              <a href="/" className="block sm:hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  Assign
                                </a>
                              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  Archive
                                </a>
                              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  Move
                                </a>
                            </div>
                          </div>
                        
                      </span>
                    </span>
                  </div>

                  {/* Right buttons */}
                  <nav aria-label="Pagination">
                    <span className="relative z-0 inline-flex shadow-sm rounded-md">
                      <a href="/" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path>
</svg>
                      </a>
                      <a href="/" className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                      </a>
                    </span>
                  </nav>
                </div>
              </div>
            </div>
            {/* Message header */}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="bg-white pt-5 pb-6 shadow">
              <div className="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8">
                <div className="sm:w-0 sm:flex-1">
                  <h1 id="message-heading" className="text-lg font-medium text-gray-900">
                    Re: New pricing for existing customers
                  </h1>
                  <p className="mt-1 text-sm text-gray-500 truncate">
                    joearmstrong@example.com
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                    Open
                  </span>
                  <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-3 relative inline-block text-left">
                    <div>
                      <button type="button" className="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600" id="menu-4" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                        <span className="sr-only">Open options</span>
                        <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                      </button>
                    </div>

                    
                      <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-4">
                        <div className="py-1" role="none">
                          <button type="button" className="w-full flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                              <span>Copy email address</span>
                            </button>
                          <a href="/" className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                              <span>Previous conversations</span>
                            </a>
                          <a href="/" className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                              <span>View original</span>
                            </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <!-- Thread section-->
            <ul className="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
              
                <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                  <div className="sm:flex sm:justify-between sm:items-baseline">
                    <h3 className="text-base font-medium">
                      <span className="text-gray-900">Joe Armstrong</span>
                      {/* space */}
                      <span className="text-gray-600">wrote</span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                      <time dateTime="2021-01-28T19:24">Yesterday at 7:24am</time>
                    </p>
                  </div>
                  <div className="mt-4 space-y-6 text-sm text-gray-800">
                    <p>Thanks so much! Can't wait to try it out.</p>
                  </div>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                  <div className="sm:flex sm:justify-between sm:items-baseline">
                    <h3 className="text-base font-medium">
                      <span className="text-gray-900">Monica White</span>
                      {/* space */}
                      <span className="text-gray-600">wrote</span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                      <time dateTime="2021-01-27T16:35">Wednesday at 4:35pm</time>
                    </p>
                  </div>
                  <div className="mt-4 space-y-6 text-sm text-gray-800">
                    
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.
            </p>
            <p>
              Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.
            </p>
            <p>
              <strong style={{fontWeight: "600"}}>Monica White</strong><br>
              Customer Service
            </p>
          
                  </div>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                  <div className="sm:flex sm:justify-between sm:items-baseline">
                    <h3 className="text-base font-medium">
                      <span className="text-gray-900">Joe Armstrong</span>
                      {/* space */}
                      <span className="text-gray-600">wrote</span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                      <time dateTime="2021-01-27T16:09">Wednesday at 4:09pm</time>
                    </p>
                  </div>
                  <div className="mt-4 space-y-6 text-sm text-gray-800">
                    
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.
            </p>
            <p>
              Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.
            </p>
            <p>
              – Joe
            </p>
          
                  </div>
                </li>
              
            </ul>
          </div>
        </section>

        <!-- Message list-->
        <aside className="hidden xl:block xl:flex-shrink-0 xl:order-first">
          <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
            <div className="flex-shrink-0">
              <div className="h-16 bg-white px-6 flex flex-col justify-center">
                <div className="flex items-baseline space-x-3">
                  <h2 className="text-lg font-medium text-gray-900">Inbox</h2>
                  <p className="text-sm font-medium text-gray-500">10 messages</p>
                </div>
              </div>
              <div className="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
                Sorted by date
              </div>
            </div>
            <nav aria-label="Message list" className="min-h-0 flex-1 overflow-y-auto">
              <ul className="border-b border-gray-200 divide-y divide-gray-200">
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Gloria Roberston</p>
                          <p className="text-sm text-gray-500 truncate">Velit placeat sit ducimus non sed</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Virginia Abshire</p>
                          <p className="text-sm text-gray-500 truncate">Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Kyle Gulgowski</p>
                          <p className="text-sm text-gray-500 truncate">Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Hattie Haag</p>
                          <p className="text-sm text-gray-500 truncate">Eos sequi et aut ex impedit</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Wilma Glover</p>
                          <p className="text-sm text-gray-500 truncate">Quisquam veniam explicabo</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Dolores Morissette</p>
                          <p className="text-sm text-gray-500 truncate">Est ratione molestiae modi maiores consequatur eligendi et excepturi magni</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Guadalupe Walsh</p>
                          <p className="text-sm text-gray-500 truncate">Commodi deserunt aut veniam rem ipsam</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Jasmine Hansen</p>
                          <p className="text-sm text-gray-500 truncate">Illo illum aut debitis earum</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Ian Volkman</p>
                          <p className="text-sm text-gray-500 truncate">Qui dolore iste ut est cumque sed</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
                  <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="/" className="block focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          <p className="text-sm font-medium text-gray-900 truncate">Rafael Klocko</p>
                          <p className="text-sm text-gray-500 truncate">Aut sed aut illum delectus maiores laboriosam ex</p>
                        </a>
                      </div>
                      <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                      </p>
                    </div>
                  </li>
                
              </ul>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  </div>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
