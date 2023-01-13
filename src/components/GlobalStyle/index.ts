import styled from "styled-components";

const FlexColumnWrap = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const FlexRowWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

const FlexCenterWrap = styled(FlexColumnWrap)`
    justify-content: center;
    align-items: center;
`;

export { FlexColumnWrap, FlexRowWrap, FlexCenterWrap };
