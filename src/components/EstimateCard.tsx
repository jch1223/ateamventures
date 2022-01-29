import React from "react";
import styled from "styled-components";

function EstimateCard() {
  return (
    <EstimateCardStyled>
      <Header>
        <h2>자동차 시제품 제작</h2>
        <ConsultingTag>상담중</ConsultingTag>
        <p className="customer">A 고객사</p>
        <p className="due-date">2020.12.14까지 납기</p>
      </Header>

      <Content>
        <Row>
          <div className="summary">도면개수</div>
          <div className="description">2개</div>
        </Row>
        <Row>
          <div className="summary">도면개수</div>
          <div className="description">2개</div>
        </Row>
        <Row>
          <div className="summary">도면개수</div>
          <div className="description">2개</div>
        </Row>
        <Row>
          <div className="summary">도면개수</div>
          <div className="description">2개</div>
        </Row>
      </Content>

      <Bottom>
        <button>요청 내역 보기</button>
        <button>채팅하기</button>
      </Bottom>
    </EstimateCardStyled>
  );
}

const Bottom = styled.div``;

const Row = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 20px;

  .summary {
    flex: 1;
  }

  .description {
    flex: 2;
    font-weight: 600;
  }

  & + & {
    margin-top: 8px;
  }
`;

const Content = styled.div`
  margin: 32px 0px;
`;

const ConsultingTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #ffa000;
  border: 1px solid #ffa000;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 1px 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

const Header = styled.div`
  position: relative;
  border-bottom: 1px solid #e5e5e5;

  h2 {
    margin-bottom: 4px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
  }

  .customer {
    margin-bottom: 24px;
    line-height: 20px;
    font-weight: 500;
    font-size: 14px;
  }

  .due-date {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.palette.gray};
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const EstimateCardStyled = styled.article`
  width: 366px;
  padding: 24px 16px;
  margin: 24px 16px;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;

  :hover {
    border: 2px solid #2196f3;
    cursor: pointer;
  }
`;

export default EstimateCard;
