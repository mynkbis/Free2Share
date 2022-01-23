import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import CreateCommunityForm from 'components/Community/CreateCommunityForm'

export default function CreateCommunityForm() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
               <CreateCommunityForm />
            </main>
            <DefaultFooter />
        </>
    );
}
