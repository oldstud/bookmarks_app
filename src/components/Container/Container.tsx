import React from "react";
import { Wrapper, Title } from './StyledComponent';

type PropsType = {
    title: string;
    children: JSX.Element;
};

export default function Container({children, title}: PropsType) {
    return (
        <Wrapper>
          <Title>{ title && title }</Title>
        { children }
        </Wrapper>
      );
}

