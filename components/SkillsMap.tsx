import * as React from 'react';

const Pill = (props: { color: string, text: string }) => <div className={`ml-2 mt-2 p-1 rounded-lg text-semibold font-display border-solid border-2 border-${props.color}-400`}>{props.text}</div>

export const SkillsMap = () => {
    return <div className="flex flex-col w-full justify-evenly rounded-lg shadow-lg border p-2">
        <h4 className="font-display font-bold">My Skills</h4>
        <div className="flex flex-row flex-wrap p-2">
            <Pill color='green' text='JavaScript'/>
            <Pill color='green' text='TypeScript'/>
            <Pill color='green' text='React.js'/>
            <Pill color='green' text='HTML'/>
            <Pill color='green' text='CSS'/>
            <Pill color='green' text='Node.js'/>
            <Pill color='amber' text='Lerna'/>
            <Pill color='amber' text='Appium'/>
            <Pill color='amber' text='Selenium'/>
            <Pill color='amber' text='Gitlab'/>
            <Pill color='red' text='Microfrontends'/>
            <Pill color='red' text='Core Java'/>
            <Pill color='red' text='Bootstrap'/>
            <Pill color='red' text='React Native'/>
            <Pill color='red' text='Cordova'/>
        </div>
    </div>
}