import {useAppSelector,useAppdispatch} from "../hooks/redux"

const isMount = () => {
    const isMounted = useAppSelector((state) => state.wallet);
    return isMounted;
  };
  
  export default isMount;