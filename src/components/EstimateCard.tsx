import React from "react";
import styled from "styled-components";

import Button from "./Button";

export interface EstimateType {
  amount: number;
  client: string;
  count: number;
  due: string;
  id: number;
  material: string[];
  method: string[];
  status: string;
  title: string;
}

interface EstimateCardProps {
  estimateData: EstimateType;
}

function EstimateCard({ estimateData }: EstimateCardProps) {
  const addCommaReducer = (acc: string, curr: string) => `${acc}, ${curr}`;

  return (
    <EstimateCardStyled>
      <Header>
        <h2>{estimateData.title}</h2>
        {estimateData.status === "상담중" && (
          <ConsultingTag>상담중</ConsultingTag>
        )}
        <p className="client">{estimateData.client}</p>
        <p className="due-date">{estimateData.due}까지 납기</p>
      </Header>

      <Content>
        <Row>
          <div className="summary">도면개수</div>
          <div className="description">{estimateData.count}개</div>
        </Row>
        <Row>
          <div className="summary">총 수량</div>
          <div className="description">{estimateData.amount}개</div>
        </Row>
        <Row>
          <div className="summary">가공방식</div>
          <div className="description">
            {estimateData.method.reduce(addCommaReducer)}
          </div>
        </Row>
        <Row>
          <div className="summary">재료</div>
          <div className="description">
            {estimateData.material.reduce(addCommaReducer)}
          </div>
        </Row>
      </Content>

      <div>
        <Button>요청 내역 보기</Button>
        <Button outline>채팅하기</Button>
      </div>
    </EstimateCardStyled>
  );
}

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

  .client {
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
  padding: 24px 16px;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;

  :hover {
    border: 2px solid #2196f3;
    cursor: pointer;
  }
`;

export default EstimateCard;
