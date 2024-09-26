import MenuManager from "@/app/components/admins/Menu";
import Admin_droit from "../components/Admin_droit";
import Nav_bar from "../components/Nav_bar";



const menu = () => {
    return (
        <div className="w-[100%] h-[100%] bg-white flex-col flex">


            <Nav_bar className="justify-start absolute" />

            <div className="flex justify-between border-t-2 border-black ">

                <Admin_droit className="justify-end" />

                <MenuManager/>

            </div>

        </div>
    );
};

export default menu ;

