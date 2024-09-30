import Admin_droit from "./components/Admin_droit";
import Nav_bar from "./components/Nav_bar";

export default function Home() {
    return (
        <section className="w-[100%] h-[100%] bg-white flex-col flex">
            <Nav_bar className="justify-start absolute" />
            <div className="flex justify-between border-t-2 border-black ">

                <Admin_droit className="justify-end" />

                <section className="w-[160%] h-[1500px] bg-blue-600 ">

                </section>
            </div>
        </section>
    );
}
