import React from "react";
import { rerenderEntireTree } from "./Redux/render"
import ReactDOM from 'react-dom/client';
import './index.css';

import MassagePost from './Redux/State';
import State from "../src/Redux/State"


rerenderEntireTree(MassagePost)
