import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="max-w-md mx-auto py-12 px-4 sm:px-0 md:py-16">
      
  <ul className="divide-y divide-gray-200">
    
      <li className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Calvin Hawkins</p>
          <p className="text-sm text-gray-500">calvin.hawkins@example.com</p>
        </div>
      </li>
    
      <li className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Kristen Ramos</p>
          <p className="text-sm text-gray-500">kristen.ramos@example.com</p>
        </div>
      </li>
    
      <li className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Ted Fox</p>
          <p className="text-sm text-gray-500">ted.fox@example.com</p>
        </div>
      </li>
    
  </ul>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
