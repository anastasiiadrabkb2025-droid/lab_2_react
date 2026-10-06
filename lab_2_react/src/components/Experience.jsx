function Experience() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">
        Досвід та Навички
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center text-slate-700 hover:translate-x-1 transition-transform">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          HTML5 / CSS3 / JavaScript
        </li>
        <li className="flex items-center text-slate-700 hover:translate-x-1 transition-transform">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Базовий React (Vite, JSX)
        </li>
        <li className="flex items-center text-slate-700 hover:translate-x-1 transition-transform">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Git & GitHub Workflows
        </li>
      </ul>
    </section>
  );
}

export default Experience;