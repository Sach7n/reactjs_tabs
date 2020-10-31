import React, { useState } from 'react';
import Overview from "./Overview"
import Reviews from "./Reviews"
import TechSpecs from "./TechSpecs"

import "./TabsDemo.css"

const TabsDemo=()=> {
  
  const TABS = {
    'overview': <Overview/>,
    'tech_specs': <TechSpecs/>,
    'reviews': <Reviews/>
  }
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <>
    
      <div className="tabs_1">
        <div  className="tab_items_1" onClick={() => setSelectedTab('overview')}><p>Overview</p></div>
        <div className="tab_items_2" onClick={() => setSelectedTab('tech_specs')}><p>Technical Specs</p></div>
        <div className="tab_items_3" onClick={() => setSelectedTab('reviews')}><p>Reviews</p></div>
      </div>
      <div className="tab_content">
      {TABS[selectedTab]}
      </div>
    </>
  );
}
export default TabsDemo;