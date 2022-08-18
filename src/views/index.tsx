import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppLayout} from "../layouts/AppLayout";
import {LandingPage} from "./app/LandingPage";
import {CreateContest} from "./app/CreateContest";
import {ManageQuestions} from "./app/ManageQuestions";
import ShowQuiz from "./app/JoinContest";

export const AppViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AppLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path={"create"} element={<CreateContest/>}/>
          <Route path={"join"} element={<ShowQuiz/>}/>
          <Route path={"manage-questions"} element={<ManageQuestions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
