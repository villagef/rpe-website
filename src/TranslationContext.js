import React from "react";
const TranslationContext = React.createContext();

const { Provider, Consumer } = TranslationContext;

export { Provider, Consumer };
export default TranslationContext;
