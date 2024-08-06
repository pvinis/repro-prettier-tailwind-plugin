import { PropsWithChildren } from "react"
import { Text as RNText, TextStyle, TextProps as RNTextProps } from "react-native"
import { tws } from "@/twHelpers"

export interface TextProps extends RNTextProps {
	variant?: "h1" | "h2" | "b1" | "b2" | "cta-medium" | "label"
	style?: TextStyle
}

export function Text({ variant, style, ...restProps }: PropsWithChildren<TextProps>) {
	const mergedStyle = tws(
		"text-white",
		"font-base",
		variant === "h1" && "font-base-bold text-base",
		variant === "h2" && "text-base",
		variant === "b1" && "text-sm text-black-body",
		variant === "b2" && "text-xs text-black-body",
		style,
	)

	return <RNText style={mergedStyle} {...restProps} />
}
