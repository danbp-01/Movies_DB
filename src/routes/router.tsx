import { Home, Popular, TopRated, NowPlaying, MyFavorites, Show } from '../pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter  from './PrivateRouter';
import PublicRouter  from './PublicRouter';
import { ROUTES } from './constants';

const routes: RouteObject[] = [
    {
        path: '/', element: <PrivateRouter/>,
        children : [
            { path: ROUTES.HOME, element: <Home/> },
            { path: ROUTES.POPULAR, element: <Popular/>}, 
            { path: ROUTES.TOP_RATED, element: <TopRated/>},
            { path: ROUTES.NOW_PLAYING, element: <NowPlaying/>}, 
            { path: ROUTES.MY_FAVORITES, element: <MyFavorites/>},
            { path: `${ROUTES.SHOW}:id`, element: <Show/>}
        ]

    },
    {
       // path: '/login' , element: <PublicRouter/>,
       // children: [
         //   { path: '/', element: <div> Login </div>},
       // ]
    }
];

export const router = createBrowserRouter(routes);
