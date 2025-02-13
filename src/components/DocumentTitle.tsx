import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const DocumentTitle: FC<{ children: string }> = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default DocumentTitle;
