import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});

    const setValues = (values) => {
        setData((prevData) => ({
            ...prevData,
            ...values,
        }));
    };

    const value = { data, setValues };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
