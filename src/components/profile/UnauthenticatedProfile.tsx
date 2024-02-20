import { AvatarIcon } from "@/assets/icons/AvatarIcon";

export const UnauthenticatedProfile = () => {
  return (
    <div>
      <div className="bg-[#1C1C1E] mt-2 rounded-sm p-4">
        <div className="flex items-center gap-4">
          <AvatarIcon />
          <div className="text-white">
            <div className="text-[32px]">Welcome to</div>
            <div className="text-gray-500">
              Please log in to your account or signup a account
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center mt-8">
          <button className="border border-[#3D5AFE] text-[#3D5AFE] w-1/2 rounded-md py-1.5 text-sm">
            Log in
          </button>
          <button className="text-white bg-[#3D5AFE] w-1/2 rounded-md py-1.5 text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
