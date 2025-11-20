import React from 'react';
import Banner from '../Components/Banner';
import Brand from '../Components/Brand';
import Review from '../Components/Review/Review';
import Services from '../Components/Services';
import FeaturesSection from '../Components/FeaturesSection';
const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        
            <FeaturesSection></FeaturesSection>
            <Brand></Brand>
            <Review reviewPromise={reviewPromise}></Review>
        </div>
    );
};

export default Home;