import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';
import CreateCommunityForm from 'components/Community/CreateCommunityForm';
import CreateNewPost from 'components/Community/CreateNewPost';
import PostPage from 'components/Community/PostPage';
import CommunityDashboard from 'components/Community/CommunityDashboard';
import Content from 'components/profile/Content';
import UserDashboard from 'components/User/UserDashboard';

export default function Landing() {
    return (
     
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                {/* <WorkingSection />
                <TeamSection />
                <ContactSection />
                <CreateCommunityForm /> */}
                {/* <Content /> */}
                {/* <CommunityDashboard /> */}
                <CreateNewPost />
                {/* <PostPage /> */}
                {/* < UserDashboard /> */}
            </main>
            <DefaultFooter />
        </>
    );
}
