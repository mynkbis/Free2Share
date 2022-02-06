import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import CommunityDashboard from 'components/Community/CommunityDashboard';

export default function CreateCommunityForm() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
               <CommunityDashboard />
            </main>
            <DefaultFooter />
        </>
    );
}
