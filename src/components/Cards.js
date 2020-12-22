import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return ( <
        div className = 'cards' >
        <
        div className = 'cards__container' >
        <
        div className = 'cards__wrapper' >
        <
        ul className = 'cards__items' >
        <
        CardItem src = 'images/img1.jpg'
        text = 'Hummingbird Technologies is an integrated service provider that offers a wide spectrum of aerospace business development and engineering services.'
        label = 'Aerospace'
        path = '/services' /
        >
        <
        CardItem src = 'images/img2.jpg'
        text = 'Hummingbird Technologies has helped many organizations in achieving significant breakthroughs in product engineering.'
        label = 'Automative'
        path = '/services' /
        >

        <
        CardItem src = 'images/img3.jpg'
        text = 'Hummingbird Technologies have also provided solutions for mobility enablement for medical devices and clinical software, integrating them securely with the cloud infrastructure for remote diagnosis and ease of access.'
        label = 'Medical Devices'
        path = '/services' /
        >
        <
        CardItem src = 'images/img4.jpg'
        text = 'Hummingbird Technologies offer comprehensive process solutions for flow, level, pressure, analysis, temperature, recording and digital communications across a wide range of industries.'
        label = 'Industrial Automation'
        path = '/services' /
        >

        <
        /ul> < /
        div > <
        /div> < /
        div >
    );
}

export default Cards;