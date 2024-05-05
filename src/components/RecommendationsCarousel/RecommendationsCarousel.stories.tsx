import { Meta, StoryFn } from '@storybook/react';
import { IRecommendations, IRecommendationsCarousel } from './types';
import RecommendationsCarousel from './RecommendationsCarousel';
import React from 'react';

const meta = {
    
        title: 'Components/RecommendationsCarousel',
        component: RecommendationsCarousel,
        parameters: {
            layout: 'fullscreen',
            docs: {
                story: {
                    inline: false,
                    iframeHeight: 400,
                }
            },
        },
        argTypes: {
            Recommendationss: { control: 'object' },
        },
        tags: ["autodocs"],
    
    };
    export default meta;
    type Props = Required<IRecommendationsCarousel>;