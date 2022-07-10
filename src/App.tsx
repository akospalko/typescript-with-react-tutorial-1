import React, { useState } from 'react';
import './App.css';
import AddToList from './Components/AddToList';
import List from './Components/List';
import { IWatchCollection as IState } from './Interfaces/IWatchCollection';
 

function App() {
  // Handling State
  const initializeState: IState["watches"] = [{
  name: 'Hamilton Khaki Field Auto',
  url: 'https://m.media-amazon.com/images/I/81gdGA+QOYL._AC_UL1500_.jpg',
  price: 600,
  description: 'ETA-10 movement (80 hour), Sapphire crystal w/o anti reflective coating, 100m water resistance.'
},
{
  name: 'Sinn 556 I',
  url: 'https://www.sinn.de/bilder/uhr/960x1280/x556-I_V.jpg.pagespeed.ic.fqrP2xThBK.webp',
  price: 1190,
  description: 'SW200-1 movement (38 hour), Sapphire crystal w anti reflective coating, 200m water resistance.'
}]
 
  const [watchCollection, setWatchCollection] = useState<IState["watches"]>(initializeState); // access IState's people prop

  return (
    <div className="App">
      <h1> My Favourite watches </h1>  
      <List watches = {watchCollection} />
      <AddToList watches={watchCollection} setWatches={setWatchCollection} />
    </div>
  );
}

export default App;
