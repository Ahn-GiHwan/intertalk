import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Interview from './interview/interview'
import Question from './question/Question'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/interview" element={<Interview />} />
          <Route path="/question" element={<Question />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default Router
