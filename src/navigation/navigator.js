import React from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { ROUTES } from './routes';

export const Navigator = () => {
    return ROUTES.map(({ route, path, page, exact }, index) => {
        const Component = page;
        return (
            <ProtectedRoute key={route + index} predicate={true} path={path} exact={exact}>
                {props => <Component {...props} />}
            </ProtectedRoute>
        );
    });
};
