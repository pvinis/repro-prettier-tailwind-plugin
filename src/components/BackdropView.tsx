import { tw } from "@/twHelpers"
import { TouchableWithoutFeedback, View } from "react-native"

export function BackdropView() {
	return (
		<TouchableWithoutFeedback style={tw`flex-1 bg-black`} onPress={() => {}}>
			<View style={tw`flex-1 bg-black opacity-50`} />
		</TouchableWithoutFeedback>
	)
}
