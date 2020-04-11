import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import Courses from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={Courses} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
