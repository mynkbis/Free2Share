import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import UserDashboard from '../components/User/UserDashboard'

export default function UserDashboardPage() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar /> 
            </div> 
            <main>
                <Header />
                <UserDashboard />    
            </main>
            <DefaultFooter />
        </>
    );
}
