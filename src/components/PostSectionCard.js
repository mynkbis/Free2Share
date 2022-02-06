import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import ProfilePicture from 'assets/img/team-2-800x800.jpg';
import PostPage from './Community/PostPage'

function PostSectionCard(props) {
console.log(props.posts)
               
    return (
        props.posts.map((item, index) =>         {
            return (
                <div className=" md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <Image src={ProfilePicture} alt="post" raised />
                    <div className="pt-6 items-center">
                        <H6 color="gray"> {item.product_name}</H6>
                    <Paragraph color="blueGray">{item.title}</Paragraph>
                    <PostPage post = {item} />  {/* //View Posts Modal */}
                       </div>
                     
                </div>
             
            )
        }
        )
    );
}
export default PostSectionCard
