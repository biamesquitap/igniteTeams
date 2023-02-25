import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActivity?: boolean;
}


export const Container = styled(TouchableOpacity) <FilterStyleProps>` ${({ theme, isActivity }) => isActivity && css`
  border: 1px solid ${theme.COLORS.GREEN_700};
 `}
  border-radius: 6px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text` ${({ theme }) => css`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
 `}
 text-transform: uppercase;
`