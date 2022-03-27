import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import CommunityDashboard from 'components/Community/CommunityDashboard';

export default function CommunityDashboardPage(props) {
  const community_id=props.location.state.communityId
    console.log(props)
    // {props.state.location.communityId?(community_id= props.state.location.communityId): (community_id=props.location.communityId)}
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
             <Header title = "Community Dashboard" description = "Here you can make post which you don't require or want to lend out inside community communities, upload photos of the product, show interest in other post here."/>
               <CommunityDashboard communityId={community_id}/>
            </main>
            <DefaultFooter />
        </>
    );
}
