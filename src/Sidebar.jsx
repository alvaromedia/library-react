import { useContext } from "react";
import BookContext from "./context/BookContext";

const Sidebar = () => {
  const { titleRef, authorRef, pagesRef, readRef, handleSubmit } =
    useContext(BookContext);

  return (
    <section className="bg-red-500">
      <form onSubmit={handleSubmit}>
        <div className="form-control p-10">
          <label htmlFor="title" className="label">
            <span className="label-text text-slate-900">Title</span>
          </label>
          <label className="input-group">
            <input
              ref={titleRef}
              id="title"
              type="text"
              className="input input-bordered"
            />
          </label>

          <label htmlFor="author" className="label">
            <span className="label-text text-slate-900">Author</span>
          </label>
          <label className="input-group">
            <input
              ref={authorRef}
              id="author"
              type="text"
              className="input input-bordered"
            />
          </label>

          <label htmlFor="pages" className="label">
            <span className="label-text text-slate-900">Pages</span>
          </label>
          <label className="input-group">
            <input
              ref={pagesRef}
              id="pages"
              type="number"
              className="input input-bordered"
              min={0}
            />
          </label>

          <label htmlFor="read" className="label">
            <span className="label-text text-slate-900">Read</span>
          </label>
          <label className="input-group">
            <input
              ref={readRef}
              id="read"
              type="checkbox"
              className="input input-bordered "
            />
          </label>

          <button className="btn btn-outline bg-slate-800">Add</button>
        </div>
      </form>
    </section>
  );
};

export default Sidebar;
