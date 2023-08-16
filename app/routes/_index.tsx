import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <div className="h-screen bg-slate-700 flex justify-center items-center">
        <h2 className="text-blue-600 font-extrabold text-5xl">
          TailwindCSS Is Working!
        </h2>
      </div>
    </main>
  );
}
