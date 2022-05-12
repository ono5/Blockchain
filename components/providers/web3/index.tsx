import { createContext, FunctionComponent,  useState, ReactNode, useContext} from "react";

const Web3Context = createContext<any>(null)

interface MyProps {
	children?: ReactNode;
}

const Web3Provider: FunctionComponent<MyProps> = ({children}) => {
	const [web3Api, _] = useState({test: "Hello Provider!"})

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
