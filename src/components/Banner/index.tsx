import React from "react";
import { Button } from "assets/styles";
import {
  BannerWrap,
  ContentWrap,
  Content,
  Title,
  Description,
  Img,
  ButtonWrap,
} from "./styled-components";

interface IProps {
  title: string;
  desc: string;
  img: string;
  btnText: string;
}
const { ButtomPrimary } = Button;
export default function Banner({
  title,
  desc,
  img,
  btnText,
}: IProps): JSX.Element {
  return (
    <BannerWrap>
      <ContentWrap>
        <Content>
          <Title>{title}</Title>
          <Description>{desc}</Description>
          <ButtonWrap>
            <ButtomPrimary>{btnText}</ButtomPrimary>
          </ButtonWrap>
        </Content>
        <Img src={img} alt="person" />
      </ContentWrap>
    </BannerWrap>
  );
}
