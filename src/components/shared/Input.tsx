import type { InputHTMLAttributes } from "react";
import { Divider } from "./Divider";

export interface InputProps extends  InputHTMLAttributes<HTMLInputElement> {
    prefix?: string;
    suffix?: string;
}
export function Input({ prefix, suffix, ...rest }: InputProps) {
    return (
        <div className="bg-input flex items-center rounded-2xl p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
            {prefix && (
                <>
                <span className="text-muted-foreground text-sm font-medium">{prefix}</span>
                <Divider orientation="vertical" className="mx-2 h-6" />
                </>
            )}
            <input {...rest} autoFocus className="bg-transparent w-full text-foreground placeholder:text-muted-foreground focus:outline-none text-sm" />
            {suffix && (
                <>
                <Divider orientation="vertical" className="mx-2 h-6" />
                <span className="text-muted-foreground ml-3 text-sm font-medium ">{suffix}</span>
                </>
            )}
        </div>
    )}
