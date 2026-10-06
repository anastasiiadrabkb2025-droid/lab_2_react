import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1 — замініть на ваш номер варіанта у списку групи за наявності
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 dark:bg-slate-800 dark:border-slate-700 mt-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
        Відгуки роботодавців
      </h2>
      {loading ? (
        <p className="text-slate-500 dark:text-slate-400">Завантаження...</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{comment.name}</h3>
              <span className="text-xs text-blue-500">{comment.email}</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;