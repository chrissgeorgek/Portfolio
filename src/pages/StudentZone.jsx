import { useEffect } from "react";

import Entrance from "../components/StudentZone/Entrance";
import CampusNavigation from "../components/StudentZone/CampusNavigation";
import ProjectLibrary from "../components/StudentZone/ProjectLibrary";
import Services from "../components/StudentZone/Services";
import DemoRoom from "../components/StudentZone/DemoRoom";
import ContactDesk from "../components/StudentZone/ContactDesk";

const StudentZone = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

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