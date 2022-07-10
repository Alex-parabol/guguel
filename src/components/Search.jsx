import React, { useEffect, useState} from "react";
import {useDebounce} from 'use-debounce';

import {useResultContext } from '../contexts/ResultContextProvider'
import {Links} from './Links'


export const Search = () => {

  const [text,setText]= useState('cats')
  return <div>
    Search
    <Links />
  </div>;
};
