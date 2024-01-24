import React from 'react';
import {
  FooterBottomSection,
  Container,
  FooterBottomInnerPart,
  FooterBottomLeft,
  FooterBottomRight,
  CopyRightText,
  RightInnerUl,
  RightInnerLi,
  FooterText,
} from '../css/FooterBottomStyled';

const FooterBottom = () => {
  return (
    <>
      <FooterBottomSection>
        <Container>
          <FooterBottomInnerPart>
            <FooterBottomLeft>
              <CopyRightText>@2021 Volker Munko</CopyRightText>
            </FooterBottomLeft>
            <FooterBottomRight>
              <RightInnerUl>
                <RightInnerLi>
                  <FooterText>Data protection</FooterText>
                </RightInnerLi>
                <RightInnerLi>
                  <FooterText>imprint</FooterText>
                </RightInnerLi>
                <RightInnerLi>
                  <FooterText>Cookie Policy</FooterText>
                </RightInnerLi>
              </RightInnerUl>
            </FooterBottomRight>
          </FooterBottomInnerPart>
        </Container>
      </FooterBottomSection>
    </>
  );
};

export default FooterBottom;
