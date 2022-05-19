import React from 'react';
import SubmitButton from './components/SubmitButton';
import User from './components/User';

const App = () => {
  const user = {
    
    name: "Sébastien",
    age: 27,
    comment: {
      lastComment: "Its Me !"
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               Boucler tableau                              */
  /* -------------------------------------------------------------------------- */

  const users = [
    { 
    
    name: "Olivia",
    age: 23,
    comment: {
      lastComment: "Path Path"
    }},
    {
    name: "Alex",
    age: 37,
    comment: {
      lastComment: "J'aime boire"
    }},
    {
    
    name: "Andy",
    age: 20,
    comment: {
      lastComment: "J'aime pas boire"
    }}
  ];

  // setIntervale permet d'executer une action toute les X secondes
  // compteur qui décrement toute les seconde 

  const handleLaunchRocket = () => {
    let cpt = 10;
    const intervalRocket = setInterval (() => {
      if(cpt <= 0) {
        console.log('lancement de la fusée');
        clearInterval(intervalRocket);
      } else {
        console.log(cpt);
      }
      cpt -= 1;
    }, 1000);
    
  }
  return (
  <div className="py-10 max-w-7xl mx-auto">
    <header>
      <div>
        <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
      </div>
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
            <SubmitButton onHandleClick={handleLaunchRocket} />
          <User name={user.name} age={user.age} comment={user.comment.lastComment} />

            {/* ------------------------point map = pour bouclé -----------------------*/}

            {users.map((u) => (
              <User
              key={u.id} 
              name={u.name} 
              age={u.age} 
              comment={u.comment.lastComment} />
            ))}

            {/* faire une clée unique (id) pour éviter l'erreur (exemple s'il y a 2 Olivia ca permet d'etre plus precis */}

            {/* props type existe mais pas intuitif */}

            

          </div>
        </div>
      </div>
    </main>
  </div>
  )
};

export default App;
