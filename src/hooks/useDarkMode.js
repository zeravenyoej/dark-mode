import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(isDark);

    useEffect(()=>{
        const body = body.querySelector('body');
        if(useLocalStorage === true){
            body.classList.add('dark-mode')
            setValue(initialValue)
        } else {
            body.classList.remove('dark-mode')
            setValue(false)};
    }, [darkMode]);

    return [darkMode, setDarkMode]
};

export default useDarkMode;