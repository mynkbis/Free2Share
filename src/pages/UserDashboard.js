import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import Dashboard from 'components/user/Dashboard';

export default function UserDashboard() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Dashboard />
            </main>
            <DefaultFooter />
        </>
    );
}
