import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import H5 from '@material-tailwind/react/Heading5';
import Paragraph from '@material-tailwind/react/Paragraph';

const colors = {
    blueGray: 'bg-blue-gray-500',
    gray: 'bg-gray-500',
    brown: 'bg-brown-500',
    deepOrange: 'bg-deep-orange-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-600', 
    lime: 'bg-lime-500',
    lightGreen: 'bg-light-green-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    lightBlue: 'bg-light-blue-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    deepPurple: 'bg-deep-purple-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    red: 'bg-red-500',
};

export default function StatusCard({ title, children }) {
    return (
        <div className="w-full md:w-12/12 p-8 flex justify-center text-center mt-25px mb-25px mx-auto">
            <Card>
                <CardBody>
                    
                    <H5 color="red">{title}</H5>
                    <H6 color="blueGray">{children}</H6>
                </CardBody>
            </Card>
        </div>
    );
}
