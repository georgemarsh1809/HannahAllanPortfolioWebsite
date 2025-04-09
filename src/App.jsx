import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { WorksPage } from './components/WorksPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
