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

const Title = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    width: 70%;
`;

const Header = styled.header`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export { Header, Title, FlexColumnWrap, FlexRowWrap, FlexCenterWrap };
