import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreateCommunityForm from 'components/Community/CreateCommunityForm';
import CommunityDashboard from './components/Community/CommunityDashboard'
import CommunityMemberList from './components/Community/CommunityMemberList'
import CreateNewPost from './components/Community/CreateNewPost'
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ForgetPassword from 'pages/forgetPassword';
import Home from 'pages/Home';
import ProfileEditting from 'pages/ProfileUpdate';
import termsCondition from 'pages/TermsCondition';
import UserDashboard from 'pages/UserDashboard';
import CreateCommunityForm from 'pages/CreateCommunity';
import CommunityDashboard from 'pages/communityDashboard';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import "@material-tailwind/react/tailwind.css";





function App() {
   
    return (

        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ProfileUpdate" component={ProfileEditting}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgetPassword" component={ForgetPassword} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/createCommunity" component={CreateCommunityForm} />
            <Route exact path="/CommunityDashboard" component={CommunityDashboard} />
            <Route exact path="/CommunityMemberList" component={CommunityMemberList} />
            <Route exact path="/CreateNewPost" component={CreateNewPost} />
            <Redirect from="*" to="/" />
        </Switch>
        // </BrowserRouter>
    );
            <Route exact path="/TermsCondition" component={termsCondition} />
            <Route exact path="/userDashboard" component={UserDashboard} />
            <Route exact path="/createCommunity" component={CreateCommunityForm} />
            <Route exact path="/communityDashboard" component={CommunityDashboard} />
            <Redirect from="*" to="/" />
        </Switch>
        </BrowserRouter>
        );
}

export default App;
