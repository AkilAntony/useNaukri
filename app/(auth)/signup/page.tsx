import SignupForm from "@/components/Auth/SignupForm";
 

const page = () => {
  return (
    <section className="min-h-screen bg-[#eef2f9] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Get started</p>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Create your account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Set up your AI-powered job application agent
          </p>
        </div>
        <SignupForm />
      </div>
    </section>
  );
};

export default page;
