import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ predicate, children, redirectTo, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                predicate ? (
                    children(props)
                ) : (
                    <Redirect
                        to={{
                            pathname: redirectTo,
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};
