import { RegisterFormDetails } from "../component/LoginDetails/RegisterFormDetails";
import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";

export function SignUpPages(){

    return(
        <>
            <Header />
            <RegisterFormDetails />
            <Footer />
        </>
    )
}