import { PropsWithChildren } from "react"
import { View, ViewStyle } from "react-native"
import { tws } from "@/twHelpers"

export interface ScreenProps {
	style?: ViewStyle
}

export function Screen({ children, style }: PropsWithChildren<ScreenProps>) {

	return (
		<View style={tws("flex flex-1 bg-black", style)}>
			<View style={tws("flex flex-1", {  })}>{children}</View>
		</View>
	)
}
