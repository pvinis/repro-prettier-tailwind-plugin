# repro for https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/309


- `pnpm install`
- `pnpn run lint:file` or `pnpx prettier src/ds/Screen.tsx`
- you will get an error like this:
```
src/ds/Screen.tsx
[error] src/ds/Screen.tsx: SyntaxError: Unexpected token, expected "{" (14:8)
[error]    1 | import { PropsWithChildren } from "react"
[error]    2 | import { View, ViewStyle } from "react-native"
[error]    3 | import { useSafeAreaInsets } from "react-native-safe-area-context"
[error]    4 | import { tws } from "@/twHelpers"
[error]    5 |
[error]    6 | export interface ScreenProps {
[error]    7 | 	style?: ViewStyle
[error]    8 | }
[error]    9 |
[error]   10 | export function Screen({ children, style }: PropsWithChildren<ScreenProps>) {
[error]   11 | 	const saInsets = useSafeAreaInsets()
[error]   12 |
[error]   13 | 	return (
[error]   14 | 		<View style={tws("flex flex-1 bg-black", style)}>
[error]   15 | 			<View style={tws("flex flex-1", { marginTop: saInsets.top })}>{children}</View>
[error]   16 | 		</View>
[error]   17 | 	)
[error]   18 | }
```
