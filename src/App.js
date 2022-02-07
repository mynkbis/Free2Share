import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreateCommunityForm from 'components/Community/CreateCommunityForm';
import CommunityDashboardPage from 'pages/CommunityDashboardPage'
import CommunityMemberList from './components/Community/CommunityMemberList'
import CreateNewPost from './components/Community/CreateNewPost'
import ForgetPassword from 'pages/forgetPassword';
import Home from 'pages/Home';
import ProfileEditting from 'pages/ProfileUpdate';
import termsCondition from 'pages/TermsCondition';
import UserDashboardPage from 'pages/UserDashboardPage';
import IncorrectPassword from './components/User/IncorrectPasswordModal'
import NotVerifiedUserModal from './components/User/NotVerifiedUserModal'
import UserNotFound from './components/User/UserNotFound'
import CommunityExistsModal from './components/Community/CommunityExistsModal'
import Logout from 'pages/Logout';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import "@material-tailwind/react/tailwind.css";
import IncorrectPasswordModal from './components/User/IncorrectPasswordModal';

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
            <Route exact path="/CommunityDashboardPage" component={CommunityDashboardPage} />
            <Route exact path="/CommunityMemberList" component={CommunityMemberList} />
            <Route exact path="/CreateNewPost" component={CreateNewPost} />
            <Route exact path="/TermsCondition" component={termsCondition} />
            <Route exact path="/userDashboardPage" component={UserDashboardPage} />
            <Route exact path="/IncorrectPasswordModal" component={IncorrectPasswordModal} />
            <Route exact path="/UserNotFound" component={UserNotFound} />
            <Route exact path="/NotVerifiedUserModal" component={NotVerifiedUserModal} />
            <Route exact path="/CommunityExistsModal" component={CommunityExistsModal} />
            <Route exact path ="/Logout" component ={Logout} />
            
            <Redirect from="*" to="/" />
        </Switch>
        </BrowserRouter>
        );
}

export default App;
