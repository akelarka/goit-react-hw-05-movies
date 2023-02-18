import styled from '@emotion/styled';
import search from '../../images/search.svg';

export const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 300px;
  border: 1px solid #bfbbba;
  border-radius: 3px;

  background-color: #fff;

  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 1rem;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font: inherit;
    font-size: 1rem;
  }
`;

export const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  outline: none;

  background-image: url(${search});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.6;

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
