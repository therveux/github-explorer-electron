import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <HeaderContainer primary>
            <p>Github Explorer</p>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    background-color: ${props => (props.primary ? 'palevioletred' : 'red')};
    margin: 0;
    display: flex;
    flex: 1;
    justify-content: center;
`;
