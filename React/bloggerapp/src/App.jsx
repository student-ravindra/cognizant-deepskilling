function App() {
  const courses = [
    {
      id: 1,
      name: "Angular",
      date: "4/5/2021"
    },
    {
      id: 2,
      name: "React",
      date: "6/3/2021"
    }
  ];

  const books = [
    {
      id: 1,
      title: "Master React",
      price: 670
    },
    {
      id: 2,
      title: "Deep Dive into Angular 11",
      price: 800
    },
    {
      id: 3,
      title: "Mongo Essentials",
      price: 450
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schewzdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div className="container">

      {/* Course Details */}
      <div className="section">
        <h1>Course Details</h1>

        {courses.map((course) => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <h4>{course.date}</h4>
          </div>
        ))}
      </div>

      {/* Book Details */}
      <div className="section">
        <h1>Book Details</h1>

        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </div>

      {/* Blog Details */}
      <div className="section">
        <h1>Blog Details</h1>

        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;