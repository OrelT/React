import React from 'react';
import { MonsterDring, MonsterGreen, MonsterLagwe, MonsterLustre } from './monster';
import TapABeer from './TapABeer';
import ValidIndicator from './ValidIndcator';
import Animal from './Animal';

const App = () => (
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
            <TapABeer /> 
            <MonsterGreen/>
            <MonsterDring/>
            <MonsterLagwe/>
            <MonsterLustre/>
            <ValidIndicator />
            <Animal />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
