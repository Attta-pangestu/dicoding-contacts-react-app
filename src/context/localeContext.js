import React from 'react';

const LocaleContext = React.createContext();
export const LocaleConsumer = LocaleContext.Consumer ; 
export const LocaleProvider = LocaleContext.Provider;


export default LocaleContext;