import { PropsWithChildren } from "react"
import { View, ViewStyle } from "react-native"
import { tws } from "@/twHelpers"

export function BottomView({
	children,
	style,
}: PropsWithChildren<{ style?: ViewStyle }>) {

	return (
		<View
			style={tws(
				"absolute w-full",
				style,
			)}
		>
			{children}
		</View>
	)
}
