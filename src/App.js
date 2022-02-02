import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ForgetPassword from 'pages/forgetPassword';
import Home from 'pages/Home';
import ProfileEditting from 'pages/ProfileUpdate';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';



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
            <Redirect from="*" to="/" />
        </Switch>
        </BrowserRouter>
        );
}

export default App;
