import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

export default function PostSectionCard(props) {
   console.log(props.product_name, props.title)
    return (
        <div className=" md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <Image src={props.img} alt="post" raised />
                <div className="pt-6 text-center">
                    <H6 color="gray"> {props.product_name}</H6>
                <Paragraph color="blueGray">{props.title}</Paragraph>
                   </div>
            </div>
        </div>
    );
}
