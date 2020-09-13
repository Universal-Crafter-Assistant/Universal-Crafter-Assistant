import React from "react";
import styled from "styled-components";


const Outer = styled.div`
  padding: 15px 15px;
`

const InnerContainer = styled.div`
  display: flex;
  height: 28px;
  border: 1px solid black;
  padding: 5px;
  flex-grow: 1;
  align-items: center;
  font-size: 110%;
`

const Amount = styled.div`
  width: 15px;
`

const Name = styled.div`
  flex: 1;
`

const CraftedBy = styled.div`
  border: 1px solid black;
  border-top: 0px;
  padding: 5px;
`

const CustomNode = ({ node, config }) => {

    return (
      <Outer>
        <InnerContainer>
          <Amount>{node.amount}</Amount>
          <Name>{node.displayName}</Name>
        </InnerContainer>
        <CraftedBy>{(node.crafted)?"Crafted by:":"Source:"} {node.source}</CraftedBy>

      </Outer>
    )
}

export default CustomNode;