import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import UserDashboard from '../components/User/UserDashboard'

export default function UserDashboardPage() {
    let userId = ((localStorage.getItem("userId")))
// let AccessToken = ((localStorage.getItem("AccessToken")))
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar /> 
            </div> 
            <main>
                <Header title = "User Dashboard" description = "Here you can see the communities, posts, photos of the user."/>
                <UserDashboard />    
            </main>
            <DefaultFooter />
        </>
    );
}
