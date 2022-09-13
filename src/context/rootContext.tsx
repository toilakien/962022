const { createContext, useState, useContext } = require("react");

const RoleContext = createContext()

export const RoleProvider = ({ children }: { children: any }) => {
    const [role, setRole] = useState()
    return <RoleContext.Provider value={{ role, setRole }} >{children}</RoleContext.Provider>
}

export const useRoleContext = () => {
    const ctx = useContext(RoleContext)

    if (!ctx) {
        throw new Error("need provider");
    }
    return ctx
}