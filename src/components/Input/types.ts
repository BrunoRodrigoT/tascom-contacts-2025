/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegister } from "react-hook-form";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<any>;
}

export type { IInputProps };