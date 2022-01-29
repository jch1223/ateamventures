import React, { useEffect } from "react";
import styled from "styled-components";

import { getEstimates } from "../api/requests";
import useFetch from "../hooks/useFetch";

import Layout from "../layouts/Layout";
import EstimateCard, { EstimateType } from "../components/EstimateCard";

function Home() {
  const { data: estimatesData, isError, error } = useFetch(getEstimates);

  useEffect(() => {
    if (isError) {
      console.error(error);
      alert("어플리케이션에 문제가 발생했습니다.");
    }
  }, [isError, error]);

  return (
    <Layout>
      <TopContent>
        <h1>들어온 요청</h1>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </TopContent>

      <article>
        <div>
          <select name="가공방식"></select>
          <select name="재료"></select>
          <div>상담 중인 요청</div>
        </div>

        {!estimatesData && <NoData>조건에 맞는 견적 요청이 없습니다.</NoData>}
        <EstimatesWrap>
          {estimatesData?.map((estimate: EstimateType) => {
            return <EstimateCard key={estimate.id} estimateData={estimate} />;
          })}
        </EstimatesWrap>
      </article>
    </Layout>
  );
}

const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.palette.darkenGray};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.gray};
`;

const EstimatesWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const TopContent = styled.section`
  margin-bottom: 30px;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export default Home;
