import React from 'react';
import { Feature } from '../components'
import features from '../fixtures/features.json'


const FeatureContainer = () => {
    return (
        <div className="FeatureContainer">
            <Feature.Container>
                {features.map(item => (
                    <Feature key={item.id} direction={item.direction}>
                        <Feature.Panel>
                            <Feature.Title>{item.title}</Feature.Title>
                            <Feature.Description>{item.description}</Feature.Description>
                        </Feature.Panel>
                        <Feature.Panel>
                            <Feature.Image src={item.image} alt={item.alt} />
                        </Feature.Panel>
                    </Feature>
                ))}
            </Feature.Container>

        </div>
    );
};

export default FeatureContainer;
