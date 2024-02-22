import React from 'react';
import styled from 'styled-components';
import { IoIosCloud } from "react-icons/io";
import { IoIosCloudOutline } from "react-icons/io";

const ItemDiv = styled.div`
    height: 50px;
    padding: 30px 15px 0 15px;
    display: flex;
    align-items: center;
`;
const Checkbox = styled.span`
    font-size: 40px;
    color: #8eb3e8;
    padding-top: 8px;
`;
const ItemP = styled.span`
    margin-left: 30px;
    color: #325a94;
    font-size: 27px;
    font-family: "GaeguR";
`;

function Item(){
    return(
        <>
            <ItemDiv>
                <Checkbox><IoIosCloud /></Checkbox>
                <ItemP>퇴근하기</ItemP>
            </ItemDiv>
            <ItemDiv>
                <Checkbox><IoIosCloudOutline /></Checkbox>
                <ItemP>샌드위치 구매하기</ItemP>
            </ItemDiv>
        </>
        
    );
};

export default Item;