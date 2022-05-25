import {useEffect} from "react";
import MediaQuery from "react-responsive";
import {useMediaQuery} from "react-responsive";

function App() {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const isBigScreen = useMediaQuery({minWidth: 1824});
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224});

    useEffect(() => {
        console.log("1", isDesktopOrLaptop);
        console.log("2", isBigScreen);
        console.log("3", isTabletOrMobile);
    }, [isBigScreen, isDesktopOrLaptop, isTabletOrMobile]);

    return <div></div>;
}

export default App;
