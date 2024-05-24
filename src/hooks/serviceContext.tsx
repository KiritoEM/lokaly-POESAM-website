import {
    IServiceContext,
    IServiceProvider,
} from "@/utils/interfaces";
import React, { createContext, useContext, useState } from "react";

const ServiceContext = createContext<IServiceContext | null>(null);

export const ServiceProvider: React.FC<IServiceProvider> = ({
    children,
}): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const [emailSent, setEmailState] = useState<boolean>(false);

    const loadingState = (state: boolean) => {
        setLoading(state);
    };

    const emailState = (state: boolean) => {
        setEmailState(state);
    };

    return (
        <ServiceContext.Provider
            value={{
                loading,
                emailSent,
                loadingState,
                emailState
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
};

//hooks exportation
export const userServiceContext = () => {
    const context = useContext(ServiceContext);

    if (!context) {
        throw new Error("hook must be used within an Provider");
    }
    return context;
};
