import { tw, tws } from "@/twHelpers"
import { Children, Fragment, PropsWithChildren } from "react"
import { View, ViewStyle } from "react-native"

interface GroupProps {
	style?: ViewStyle
}

export function Group({ children, style }: PropsWithChildren<GroupProps>) {
	return (
		<View style={tws("overflow-hidden rounded", style)}>
			{Children.toArray(children).map((child, i) => {
				if (i === 0) return child
				return (
					<Fragment key={`${i}`}>
						<View style={tw`h-px w-full bg-group`} />
						{child}
					</Fragment>
				)
			})}
		</View>
	)
}
