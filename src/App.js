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
// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import "@material-tailwind/react/tailwind.css";



function App() {
   
    return (

        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/createCommunity" component={CreateCommunityForm} />
            <Route exact path="/CommunityDashboard" component={CommunityDashboard} />
            <Route exact path="/CommunityMemberList" component={CommunityMemberList} />
            <Route exact path="/CreateNewPost" component={CreateNewPost} />
            <Redirect from="*" to="/" />
        </Switch>
        // </BrowserRouter>
    );
}

export default App;
