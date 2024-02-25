import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
    return (
        <div className="d-flex">
            <div style={{ flexGrow: 1 }}>
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div>
                <Status />
            </div>
        </div>
    );
}
export default Home;