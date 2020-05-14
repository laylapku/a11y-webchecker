import React from "react";
import styled from "styled-components";
import { spacing } from "../../shared/style";
import Icon from "../icon/Icon";
import Link from "../links/Links";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.padding.medium}px;
`;
const StyledLink = styled(Link)`
  display: inline-flex;
  align-item: baseline;
  & > :first-child {
    margin-right: 4px;
  }
  & > :last-child {
    margin-right: ${spacing.padding.small}px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink isSecondary={true}>
        <Icon className="icon" icon="creativeCommon1" />
        <Icon className="icon" icon="creativeCommon2" />
        Licence name
      </StyledLink>
      <Link isSecondary={true}>imprint</Link>
    </StyledFooter>
  );
};

export default Footer;
