import React from "react";
import styled from "styled-components";

import { getEstimates } from "../api/requests";
import useFetch from "../hooks/useFetch";

import Layout from "../layouts/Layout";
import EstimateCard, { EstimateType } from "../components/EstimateCard";

function Home() {
  const {
    data: estimatesData,
    isLoading,
    isError,
    error,
  } = useFetch(getEstimates);
  console.log(estimatesData);

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

        <div>
          {estimatesData?.map((estimate: EstimateType) => {
            return <EstimateCard key={estimate.id} estimateData={estimate} />;
          })}
        </div>
      </article>
    </Layout>
  );
}

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
