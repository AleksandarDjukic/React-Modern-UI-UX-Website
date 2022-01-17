import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components/feature/Feature';

export const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
            <div className='gpt3__whatgpt3-container'>
                <div className='gpt3__whatgpt3-heading'>
                    <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                    <p>Explore The Library &rarr;</p>
                </div>                
                <Feature title="What is GPT3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
                <Feature title="A. I." text="Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of 'intelligent agents': any system that perceives its environment and takes actions that maximize its chance of achieving its goals." />
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                <Feature title="Knowladgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
            </div>
        </div>
    )
}
export default WhatGPT3;