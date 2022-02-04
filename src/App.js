import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import "@material-tailwind/react/tailwind.css";
import CreateCommunityForm from 'components/Community/CreateCommunityForm';

function App() {
   
    return (

        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/createCommunity" component={CreateCommunityForm} />
            <Redirect from="*" to="/" />
        </Switch>
        // </BrowserRouter>
    );
}

export default App;
