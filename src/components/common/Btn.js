import styled from 'styled-components'

export const BaseBtn = styled.button.attrs({
  type: ({ submit }) => (submit ? 'submit' : 'button')
})`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${({ block }) => (block ? '100%' : 'auto')};
  font: inherit;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  background-color: transparent;
  padding: 0;
  color: ${p => p.theme.colors.light};
  outline: none;

  &[data-disabled='true'],
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn = BaseBtn.extend`
  line-height: 2.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${p => p.theme.colors.primary};
  border-radius: 12px;
  background-color: ${p => p.theme.colors.lightBG};
  background-image: linear-gradient(
    to top,
    transparent,
    ${p => p.theme.colors.light}
  );
  box-shadow: inset 0 3px 0 0 rgba(255, 255, 255, 0.1);
  padding: 1.6rem;

  &:not([disabled], [data-disabled]):hover,
  &:not([disabled], [data-disabled]):focus,
  &:not([disabled], [data-disabled]):active {
    background-color: ${p => p.theme.colors.light};
    box-shadow: 0 2px 8px 0 ${p => p.theme.colors.darkShade};
  }
`

export const FieldBtn = BaseBtn.extend`
  float: ${p => (p.float ? 'right' : 'none')};
  line-height: 1.8rem;
  opacity: 0.5;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-shadow: 0 1px 1px ${p => p.theme.colors.darkShade};
  margin-top: ${p => (p.float ? '0.4rem' : 0)};
  white-space: nowrap;

  &:hover {
    opacity: 1;
  }
`
