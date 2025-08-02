import { Modal } from "@components/common";
import { Carriculum, CourseHero, KeyPoints } from "@components/course";
import { BaseLayout } from "@components/layout";

export default function Course() {
  return (
    <>
      <div className="py-4">
        <CourseHero />
      </div>
      <KeyPoints />
      <Carriculum />
      <Modal />
    </>
  );
}

Course.Layout = BaseLayout;
