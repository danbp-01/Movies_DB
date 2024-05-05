import { Meta, StoryFn } from '@storybook/react';
import { IMovie, IMovieCarousel } from './types';
import MoviesCarousel from './MovieCarousel';
import React from 'react';

const meta = {
    
        title: 'Components/MovieCarousel',
        component: MoviesCarousel,
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
            movies: { control: 'object' },
        },
        tags: ["autodocs"],
    
    };
    export default meta;
    type Props = Required<IMovieCarousel>;