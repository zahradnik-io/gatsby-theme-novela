import React from "react";

import Subscription from "@components/Subscription";

import Comments from "@components/Comments";

import { Template } from "@types";


const ArticleFooter: Template = ({ pageContext, articleUrl }) => {
  const { article, mailchimp, disqus } = pageContext;

  return (
    <>
      {mailchimp && article.subscription && <Subscription />}
      {disqus && article.comments && <Comments article={article} articleUrl={articleUrl} />}
    </>
  );
};

export default ArticleFooter;
