
import ParaForm from "@/app/components/admins/ParaForm";
import Admin_droit from "../components/Admin_droit";
import Nav_bar from "../components/Nav_bar";



const Parametre = () => {
    return (
        <div className="w-[100%] h-[100%] bg-white flex-col flex">


            <Nav_bar className="justify-start absolute" />

            <div className="flex justify-between border-t-2 border-black ">

                <Admin_droit className="justify-end" />

                <ParaForm />

            </div>

        </div>
    );
};

export default Parametre;

