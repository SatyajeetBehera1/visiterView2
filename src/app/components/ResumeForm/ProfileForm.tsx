import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };
  const UserCircle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6 text-gray-600"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );

  return (
    <BaseForm >
      <div className="flex items-center">
        {UserCircle}
        <p className="font-semibold text-lg ml-2">PROFILE</p>
      </div>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Name"
          labelClassName="col-span-full"
          name="name"
          placeholder="Not Nothing"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Role"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Passonate FrontEnd Developer"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="483q98@gmail.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Phone"
          labelClassName="col-span-2"
          name="phone"
          // type="number"
          placeholder="1234567899"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="https://www.linkedin.com/in/satyajeet-behera/"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Location"
          labelClassName="col-span-2"
          name="location"
          placeholder="Odisha"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
