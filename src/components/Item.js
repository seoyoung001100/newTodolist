import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { IoIosCloud, IoIosCloudOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const Remove = styled.span`
    color: #eb9696;
    justify-content: flex-end;
    font-size: 25px;
    &:hover{
        color: #f0b9b9;
    }
    display: none;
`;
const ItemDiv = styled.div`
    /* width: 100%; */
    height: 50px;
    padding: 30px 15px 0 15px;
    display: flex;
    align-items: center;
    /* 내가 여기에 마우스를 올리면 내가 호출한 컴포넌트에 스타일을 바꿔라~ */
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`;
const Checkbox = styled.span`
    font-size: 40px;
    color: #8eb3e8;
    padding-top: 8px;
`;
const ItemP = styled.span`
    width: 70%;
    margin-left: 30px;
    color: #325a94;
    font-size: 27px;
    font-family: "GaeguR";
    

    ${props => 
        props.isChecked && css`
            color: #b0c3d9;
            text-decoration: line-through;
            &::after{
                color: #b0c3d9;
                text-decoration: line-through;
                text-decoration-thickness: 1px;
            }`
    }
`;


function Item(){
    const [isChecked, setChecked] = useState(false);
    const heandleCheck = () => {
        setChecked(!isChecked);
    }

    return(
        <ItemDiv>
            <Checkbox onClick={heandleCheck}>{isChecked ? <IoIosCloud /> : <IoIosCloudOutline />}</Checkbox>
            <ItemP isChecked={isChecked}>퇴근하기</ItemP>
            <Remove><MdDelete /></Remove>
        </ItemDiv>
    );
};

// React.memo(): 불필요한 리렌더링 방지한다. >> 자연스럽게 속도가 빨라진다.
// Context 에서 불러오는 데이터 떄문??  
export default React.memo(Item);