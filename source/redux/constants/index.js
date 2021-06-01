import keyMirror from "fbjs/lib/keyMirror"

// key mirror is a method which accepts an object
const ActionTypes = keyMirror({
    SET_USER_NAME : "SET_USER_NAME",
    SET_USER_FINANCE_INFO : "SET_USER_FINANCE_INFO "
})


export default ActionTypes

// redux
// >> action , constant , reducer , store 
// >>> constant -> 