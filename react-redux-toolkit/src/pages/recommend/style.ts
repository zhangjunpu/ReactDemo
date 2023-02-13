import styled from "styled-components";

export const RecommendWrapped = styled.div`
  padding: 10px;
  
  .banners {
    display: flex;
    flex-wrap: wrap;

    .item {
      margin: 10px;

      .title {
        color: #666;
        font-size: 14px;
      }

      .img {
        width: 324px;
        height: 120px;
      }
    }
  }
`;
