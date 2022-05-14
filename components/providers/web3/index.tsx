import { createContext, FunctionComponent,  useState, ReactNode, useContext} from "react";
import { createDefaultState, Web3State } from "./utils";

const Web3Context = createContext<Web3State>(createDefaultState())

interface MyProps {
	children?: ReactNode;
}

const Web3Provider: FunctionComponent<MyProps> = ({children}) => {
	const [web3Api, _] = useState<Web3State>(createDefaultState())

	return (
		<Web3Context.Provider value={web3Api}>
			{children}
		</Web3Context.Provider>
	)
}

export function useWeb3() {
	return useContext(Web3Context)
}

export default Web3Provider
