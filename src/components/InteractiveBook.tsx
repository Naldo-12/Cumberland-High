import HTMLFlipBook from "react-pageflip";

export default function InteractiveBook() {
  const pages = [
    { title: "Welcome", image: "/cover.jpg" },
    { title: "Code of Conduct", content: "Students are expected to..." },
    { title: "Dress Code", content: "Maintain professional attire..." },
    { title: "Academic Integrity", content: "Cheating and plagiarism..." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-10">
      <h1 className="text-4xl font-bold text-white mb-6">Student Handbook</h1>

      <HTMLFlipBook
        width={550}
        height={733}
        minWidth={315}
        maxWidth={1000}
        maxHeight={1536}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-lg"
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="bg-white p-8 flex flex-col justify-between shadow-inner"
          >
            {page.image ? (
              <img
                src={page.image}
                alt={page.title}
                className="rounded-lg object-cover w-full h-full"
              />
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {page.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{page.content}</p>
              </>
            )}
          </div>
        ))}
      </HTMLFlipBook>

      <p className="text-gray-400 text-sm mt-6">
        Click or swipe to turn pages
      </p>
    </div>
  );
}
