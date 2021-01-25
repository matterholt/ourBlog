export default function LinkRoutes() {
  return (
    <div className="flex w-1/2 pl-4 text-sm">
      <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
        <li className="mr-2">
          <a
            className="inline-block py-2 px-2 text-white no-underline hover:underline"
            href="post.html"
          >
            POST
          </a>
        </li>
        <li className="mr-2">
          <a
            className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
            href="#"
          >
            LINK
          </a>
        </li>
        <li className="mr-2">
          <a
            className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
            href="#"
          >
            LINK
          </a>
        </li>
        <li className="mr-2">
          <a
            className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
            href="post_vue.html"
          >
            POST_VUE
          </a>
        </li>
      </ul>
    </div>
  );
};
