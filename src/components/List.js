import React from 'react';
import styled from 'styled-components';
// import { IoIosCloud } from "react-icons/io";
// import { IoIosCloudOutline } from "react-icons/io";
import Item from './Item';

const ItemList = styled.div`
    width: 710px;
    height: 450px;
    overflow-y: auto;

    //위치 조정
    position: absolute;
    top: 50%;
    left: 61.5%;
    transform: translate(-50%, -50%);
    z-index: 5;
`;

function List(){
    return(
        <ItemList>
            <Item></Item>
        </ItemList>
    );
}

export default List;