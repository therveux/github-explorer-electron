import { WelcomePage } from '../pages/welcome.page';
import { TestPage } from '../pages/test.page';

export const ROUTES = [
    {
        route: 'welcome',
        path: '/',
        exact: true,
        page: WelcomePage
    },
    {
        route: 'test',
        path: '/pwet',
        exact: false,
        page: TestPage
    }
];
