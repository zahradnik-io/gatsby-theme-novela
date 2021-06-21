import Section from "@components/Section";

import Disqus from "gatsby-plugin-disqus";

import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Comments = ({ article, articleUrl }) => {

  let disqusConfig = {
    url: articleUrl,
    identifier: article.id,
    title: article.title,
  }

  return (
    <Section narrow>
      <CommentsContainer>
        <Content>
          <Disqus config={disqusConfig} />
        </Content>
      </CommentsContainer>
    </Section>
  );
};

export default Comments;

const CommentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 10px auto 100px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;

  ${mediaqueries.tablet`
    padding: 50px 0 0;
    text-align: center;
  `}

  ${mediaqueries.phablet`
    margin: -20px auto 80px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  ${mediaqueries.tablet`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;
