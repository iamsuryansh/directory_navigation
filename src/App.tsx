import { FilesystemItem } from './components/Folders';

import nodes from './constants/Nodes';

function App() {

  return (
    <div className='flex flex-col justify-center gap-12 ml-20 mt-20'>
    <div className='text-3xl text-gray-900 subpixel-antialiased font-bold'>Directory Navigation </div>
    <ul>
      {nodes.map((node) => (
        <FilesystemItem node={node} />
      ))}


    </ul>
    </div>
  )
}

export default App
