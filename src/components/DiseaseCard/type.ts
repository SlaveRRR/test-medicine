import { ReactElement } from "react";

export interface IDiseaseCard{
    icon:string;
    head:ReactElement<any,any>;
    text:ReactElement<any,any>;
    percent:string;
}