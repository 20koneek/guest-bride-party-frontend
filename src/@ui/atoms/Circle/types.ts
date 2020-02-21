import { ChangeEventHandler, ReactNode } from 'react'

export interface Props extends UseStyle {
  defaultValue?: unknown
  disabled?: boolean;
  error?: boolean;
//  helperText?: React.ReactNode;
  id?: string;
  label?: ReactNode;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: unknown;
}
