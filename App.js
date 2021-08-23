import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { MyTabs } from "./src/components/tab-navigator/index.js";
import { Contact } from "./src/pages/contact/index.jsx";
import { Fotos } from "./src/pages/fotos/index.jsx";

import { Home } from "./src/pages/home/index.jsx";
import { Settings } from "./src/pages/setting/index.jsx";


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}




