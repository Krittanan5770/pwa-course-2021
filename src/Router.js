// import router เข้ามาเตรียมใช้งาน //

import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import PageDrawing from './PageDrawing';
import Profile from './Profile';
import App from './App';
import FlexShow from './FlexShow';
import HomePage from './HomePage';
import Info from './Info';

function Router(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/flex">
                <FlexShow />
            </Route>
            <Route path="/Home">
                <HomePage />
            </Route>
            <Route path="/App">
                <App />
            </Route>
            <Route path="/friend-list">
                <FriendList />
            </Route>
            <Route path="/Info">
                <Info />
            </Route>
            <Route path="/PageDrawing">
                <PageDrawing />
            </Route>
            <Route path="/Profile">
                <Profile />
            </Route>
            <Route path="/">
                <Chatbox />
            </Route>
        </Switch>
    </BrowserRouter>
    )
};

export default Router; // ส่งออก Router ไปให้ใช่งาน //
