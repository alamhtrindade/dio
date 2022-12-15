import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: React.ReactNode;
    name: string;
    control?: any;
    errorMessage?: string;
}