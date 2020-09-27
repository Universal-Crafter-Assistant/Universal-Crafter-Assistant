import React from 'react';
import './App.css';
import { FlowChartWithState as FlowChart } from "@mrblenny/react-flow-chart";
import CustomNode from "./CustomNode.js";
import styled from "styled-components";
import chartSimple from "./chartSimple";
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";

const CanvasOuterCustom = styled.div`
    position: relative;
    background-size: 10px 10px;
    background-color: #a2a2a2;
    background-image:
      linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),
      linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: not-allowed;
  `;

function App() {

  return (
    <div className="app">
      <CssBaseline />
      <header>
        <h1>Universal Crafter Assistant</h1>
      </header>
      <Appbar />
      <Sidebar />
      <div className="main">
        <FlowChart config={{ readonly: true }} initialValue={chartSimple} Components={{
              NodeInner: CustomNode,
              CanvasOuter: CanvasOuterCustom
            }}/>
      </div>
      <footer>
        v{process.env.REACT_APP_VERSION}&nbsp;
        | WORK IN PROGRESS
        | All product names, logos, and brands are property of their respective owners.
        | View on&nbsp;<a href="https://github.com/Universal-Crafter-Assistant/Universal-Crafter-Assistant">Github</a>
      </footer>
    </div>
  );
}

export default App;
