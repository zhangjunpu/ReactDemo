import styled from "styled-components";

export const PlayerWrapped = styled.div`
  padding: 10px;

  .content {
    display: flex;
    padding: 10px;

    .left {
      width: 300px;
      font-size: 16px;
      color: #333;
      font-weight: bold;

      .cover {
        width: 100px;
        height: 100px;

        .img {
          width: 100px;
          height: 100px;
        }
      }

      .name,
      .artist {
        margin-top: 10px;
      }
    }
  }
`;
