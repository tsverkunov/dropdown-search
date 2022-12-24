import React from 'react';
import {githubApi} from "../../api/github.api";
import {IUser, ServerResponse} from "../../models/models";
import Search from "../../components/Search/Search";
import './Home.scss'

const Home = () => {


  return (
    <div className="homePage">
      <Search/>
    </div>
  );
};

export default Home;
