import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { WorksPage } from './components/WorksPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { TenthPlanetProjectPage } from './components/WorksPage/components/TenthPlanetProjectPage';
import InnerChildLivingProjectPage from './components/WorksPage/components/InnerChildLivingProjectPage/InnerChildLivingProjectPage';
import MonsoonFNProjectPage from './components/WorksPage/components/MonsoonFNProjectPage/MonsoonFNProjectPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="works/TenthPlanet" element={<TenthPlanetProjectPage />} />
            <Route path="works/InnerChildLiving" element={<InnerChildLivingProjectPage />} />
            <Route path="works/MonsoonFN" element={<MonsoonFNProjectPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
