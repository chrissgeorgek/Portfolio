import Entrance from "../components/StudentZone/Entrance";
import ProjectLibrary from "../components/StudentZone/ProjectLibrary";
import CampusNavigation from "../components/StudentZone/CampusNavigation";
import Services from "../components/StudentZone/Services";
import DemoRoom from "../components/StudentZone/DemoRoom";
import ContactDesk from "../components/StudentZone/ContactDesk";

const StudentZone = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Entrance />
      <CampusNavigation />
      <ProjectLibrary />
      <Services />
      <DemoRoom />
      <ContactDesk />
    </main>
  );
};

export default StudentZone;