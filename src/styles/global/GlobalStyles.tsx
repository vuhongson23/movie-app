import React from 'react';

interface GlobalTypesProps {
    children: React.ReactNode
}

const GlobalStyles = ({children} : GlobalTypesProps) => {
    return React.Children.only(children)
};

export default GlobalStyles;