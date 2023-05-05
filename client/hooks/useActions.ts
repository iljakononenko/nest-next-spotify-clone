import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import ActionsCreators from "@/store/actions-creators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreators, dispatch);
}
