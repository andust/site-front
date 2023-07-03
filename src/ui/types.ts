import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

// eslint-disable-next-line max-len
export type ReactButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type OnClickProps = { onClick?: React.MouseEventHandler<HTMLButtonElement> };
