import LoginForm from "@/components/Auth/LoginForm";

const page = () => {
  return (
    <section className="h-full flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Welcome back</p>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Continue managing your AI job agent
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default page;
