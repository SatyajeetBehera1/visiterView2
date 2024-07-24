"use client";
import { useState } from "react";
import { ProfileForm } from "components/ResumeForm/ProfileForm";
import { WorkExperiencesForm } from "components/ResumeForm/WorkExperiencesForm";
import { EducationsForm } from "components/ResumeForm/EducationsForm";
import { ProjectsForm } from "components/ResumeForm/ProjectsForm";
import { SkillsForm } from "components/ResumeForm/SkillsForm";
import { CustomForm } from "components/ResumeForm/CustomForm";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { cx } from "lib/cx";


interface Props {
  activeButton: string;
  onClose: () => void;
}

export const MobileResumeForm: React.FC<Props> = ({ activeButton, onClose }) => {

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={cx(
          "relative flex flex-col bg-white p-4 w-full h-full max-w-2xl overflow-y-auto",
          isHover && "scrollbar-thumb-gray-200"
        )}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <section className="flex flex-col gap-8 p-[var(--resume-padding)]">
          {activeButton === "ABOUT YOU" && <ProfileForm />}
          {activeButton === "PROJECT" && <ProjectsForm />}
          {activeButton === "WORK EXPERIENCE" && <WorkExperiencesForm />}
          {activeButton === "EDUCATION" && <EducationsForm />}
          {activeButton === "SKILLS" && <SkillsForm />}
          {activeButton === "CUSTOM" && <CustomForm />}
        </section>
        <FlexboxSpacer maxWidth={50} className="hidden md:block" />
      </div>
    </div>
  );
};
