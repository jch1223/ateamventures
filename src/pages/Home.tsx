import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { getEstimates } from "../api/requests";
import useFetch from "../hooks/useFetch";

import Layout from "../layouts/Layout";
import EstimateCard, { EstimateType } from "../components/EstimateCard";
import Select, { optionDateFor } from "../components/Select";

import refreshImg from "../assets/images/refresh.png";
import Switch from "../components/Switch";

const METHODS = ["밀링", "선반"];
const MATERIA = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

function Home() {
  const {
    data: estimatesData,
    isError,
    error,
  } = useFetch<EstimateType[]>(getEstimates);
  const [methodData, setMethodData] = useState(optionDateFor(METHODS));
  const [materialData, setMaterialData] = useState(optionDateFor(MATERIA));
  const [statusChecked, setStatusChecked] = useState(false);

  const filter = useMemo(() => {
    return {
      method: Object.keys(methodData).filter(
        (value) => methodData[value].checked
      ),
      material: Object.keys(materialData).filter(
        (value) => materialData[value].checked
      ),
      status: statusChecked,
    };
  }, [methodData, materialData, statusChecked]);

  const filteredEstimatesData = useMemo(() => {
    return estimatesData?.filter((estimate) => {
      if (statusChecked && estimate.status !== "상담중") {
        return false;
      }

      for (let i = 0; i < filter.method.length; i++) {
        const element = filter.method[i];
        if (!estimate.method.includes(element)) {
          return false;
        }
      }

      for (let i = 0; i < filter.material.length; i++) {
        const element = filter.material[i];
        if (!estimate.material.includes(element)) {
          return false;
        }
      }

      return true;
    });
  }, [estimatesData, statusChecked, filter.method, filter.material]);

  useEffect(() => {
    if (isError) {
      console.error(error);
      alert("어플리케이션에 문제가 발생했습니다.");
    }
  }, [isError, error]);

  const resetFiltered = () => {
    setMethodData(optionDateFor(METHODS));
    setMaterialData(optionDateFor(MATERIA));
  };

  return (
    <Layout>
      <TopContent>
        <h1>들어온 요청</h1>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </TopContent>

      <article>
        <FilterStyled>
          <SelectWrap>
            <div>
              <Select
                summary="가공방식"
                options={methodData}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setMethodData({
                    ...methodData,
                    [e.currentTarget.value]: {
                      checked: e.currentTarget.checked,
                    },
                  });
                }}
              />
              <Select
                summary="재료"
                options={materialData}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setMaterialData({
                    ...materialData,
                    [e.currentTarget.value]: {
                      checked: e.currentTarget.checked,
                    },
                  });
                }}
              />
            </div>
            {(!!filter.material.length || !!filter.method.length) && (
              <FilteringReset onClick={resetFiltered}>
                <img src={refreshImg} alt="refresh" />
                <span>필터링 리셋</span>
              </FilteringReset>
            )}
          </SelectWrap>

          <SwitchWrap>
            <Switch
              isChecked={statusChecked}
              onClick={() => setStatusChecked(!statusChecked)}
            />
            <span>상담 중인 요청만 보기</span>
          </SwitchWrap>
        </FilterStyled>

        {!filteredEstimatesData?.length && (
          <NoData>조건에 맞는 견적 요청이 없습니다.</NoData>
        )}
        <EstimatesWrap>
          {filteredEstimatesData?.map((estimate: EstimateType) => {
            return <EstimateCard key={estimate.id} estimateData={estimate} />;
          })}
        </EstimatesWrap>
      </article>
    </Layout>
  );
}

const SwitchWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  label {
    margin-right: 16px;
  }
`;

const FilteringReset = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;

  span {
    margin-left: 12px;
    margin-bottom: 2px;
    font-size: 12px;
    color: ${({ theme }) => theme.palette.blue};
  }
`;

const SelectWrap = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FilterStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

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

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
