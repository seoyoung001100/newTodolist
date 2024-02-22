import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { css } from 'styled-components';

// +버튼 디자인
const Btn = styled.button`
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 50%;
    background-color: #a7c6e8;
    color: white;
    font-size: 45px;

    //중앙 정렬
    display: flex;
    align-items: center;
    justify-content: center;

    //위치 조정
    position: absolute;
    top: 85%;
    left: 92%;
    transform: translate(-50%, -50%);
    z-index: 5;

    &:hover{
        background-color: #c1ddf5;
    }
    //props 안에 push가 있을때 이 CSS를 실행시켜라
    ${props =>
        props.push && css`
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: white;
        color: #a7c6e8;
        &::after{
            background-color: white;
        }
        &:hover{
            background-color: #f7f8fa;
        }
        `
    }
`;

// 입력창 디자인
const Form = styled.form`
    width: 710px;
    height: 100px;
    background-color: #e4edf5;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    //위치 조정
    position: absolute;
    top: 85%;
    left: 61.5%;
    transform: translate(-50%, -50%);
    z-index: 5;
`;

const Input = styled.input`
    width: 700px;
    height: 90px;
    border-radius: 50px;
    border: none;
    background-color:transparent;
    outline: none;

    padding: 10px 40px 10px 40px;

    font-size: 20px;
    color: #325a94;
    &::placeholder{
        color: #9ab4db;
        font-family: "GaeguR"
    }
    font-family: "GaeguR";
`;


function Create(){
    const [push, setPush] = useState(false);
    const toggle = () => setPush(prev => ! prev); 
    //자기 자신을 그대로 받아오면 오류가 생기길 수 있기 떄문에 prev를 사용
    //상태를 반전 시킴 (false 에서 true로) > 이렇게 해야 입력창이 열린다. (토글값 설정 때문)

    return(
        <>  
            {/* input 기능도 포함 */}
            {/* push인 상태일 때 하단 코드를 실행 시킨다. */}
            {push && 
                <Form>
                    <Input autoFocus placeholder='항목을 입력하세요.'/>
                </Form>
            }
            
            <Btn onClick={toggle} push={push}>
                <MdAdd />
            </Btn>
        </>
        
    );
};

export default Create;