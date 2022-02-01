import React from "react";
import { Wrapper, Title } from './StyledComponent';

type PropsT = {
    title: string;
    children: JSX.Element;
};

export default function Container({children, title}: PropsT) {
    return (
        <Wrapper>
          <Title>{ title && title }</Title>
        { children }
        </Wrapper>
      );
}

