import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import UserDashboard from 'pages/UserDashboard';
import CreateCommunityForm from 'pages/CreateCommunity';
import CommunityDashboard from 'pages/communityDashboard';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';



function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/userDashboard" component={UserDashboard} />
            <Route exact path="/createCommunity" component={CreateCommunityForm} />
            <Route exact path="/communityDashboard" component={CommunityDashboard} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
