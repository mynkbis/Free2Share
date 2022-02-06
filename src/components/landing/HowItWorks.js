import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';

export default function HowItWorks() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background  bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H4 color="white">How it Works?</H4>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                            Welcome to The Free2Share Network™! We are a grassroots & entirely nonprofit movement of people who are giving and getting stuff for free in their own Towns. It's all about reuse and keeping good stuff out of landfills. Membership is free. And now you can also set up your own, smaller local community for gifting and lending of items with just your friends! Register now.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
