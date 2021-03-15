import { useContext } from "react";

import Context from "./TranslationContext";

export default props => {
  const translationContext = useContext(Context);
  return translationContext.labels[props.label];
};
