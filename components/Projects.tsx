import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faGooglePlay, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface IPropsDescription {
    name: string;
    description: string;
    link: () => JSX.Element;
}

const projects = [
    {
        name: 'Apollo Pharmacy 24|7',
        description: 'An Android app that Discover the convenience of health and wellness at your fingertips. Experience a seamless way to manage your healthcare needs anytime, anywhere.',
        link: () => {
            return <div className="flex flex-row text-sm">
                <a href="https://play.google.com/store/apps/details?id=com.apollo.patientapp&hl=en_US" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
            </div>
        }
    },
    {
        name: 'Scripbox ',
        description: 'A smarter way of achieving your financial goals with the Scripbox app. Take control of your investments and secure your financial future with our user-centric and intuitive platform.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://play.google.com/store/apps/details?id=com.scripbox.takecharge&gclid=Cj0KCQjw6KunBhDxARIsAKFUGs-HZEqr6gmidgsV9xMpk7xJotJ0UPOLadWQWDdxMjDUvnjRrYiOGfYaAn5oEALw_wcB" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
            </div>
        }
    },
    {
        name: 'Netspend App',
        description: 'An android app that seamlessly manage your finances on-the-go with a suite of powerful features designed to simplify your financial life.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://play.google.com/store/apps/details?id=com.netspend.product.android&hl=en&gl=US" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
            </div>
        }
    },
];

export const ProjectDescriptionCard = (props: IPropsDescription) => {
    return <div className="shadow-inner p-2">
        <div className="grid grid-cols-3 divide-x divide-gray-500">
            <div className="font-display font-bold p-2 my-auto">{props.name}</div>
            <div className="font-body p-2 ">{props.description}</div>
            <div className="p-2"><div className="my-auto">{props.link()}</div></div>
        </div>
    </div>

}

export const Projects = () => {
    return <div className="w-full z-10 shadow-lg mr-8">
        <h3 className="p-2 font-display font-bold">Personal Projects Showcase (Select)</h3>
        <div>
            {
                projects.map((ele, index) => <ProjectDescriptionCard key={index} name={ele.name} description={ele.description} link={ele.link} />)
            }
        </div>
    </div>
}
