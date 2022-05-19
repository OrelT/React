import React from 'react';
// import files from './data/filesData';
import FileIcon from './data/composant/FileIcon';


const App = (filesData) => (
  <div className="py-10 max-w-7xl mx-auto">

    <header>
      <div>
        <img src="" alt="" className="w-36 h-36 m-4 bg-red-400 mx-auto border-gray-200 rounded-lg" />
        
      </div>
    </header>

    <main>
    <FileIcon/>
          <div className="text-sm font-medium leading-5 text-gray-900" >
            

          {/* <files name={files.name} type={files.type} date={files.update_at} msg={files.latestCommit.message}/>
          {files.map((f) => (
          <files key={f.id} name={f.name} type={f.type} date={f.update_at} msg={f.latestCommit.message} /> ))} */}
          
          </div>
    </main>
    
  </div>
);

export default App;
