import { Switch, Route, Redirect } from 'react-router-dom';
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

function App() {
    toast.configure()
    const notify = ()=>{
        // // Set to 3sec
        toast.success('successful!', {position:toast. TOP_CENTER, autoClose:3000})
         }
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
