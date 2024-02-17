
function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.google.com/">
            <i className="ri-facebook-circle-fill text-gray-600"></i>
          </a>

          <i className="ri-mail-line text-gray-600"></i>
          <i className="ri-instagram-line text-gray-600"></i>
          <i className="ri-linkedin-box-fill text-gray-600"></i>
          <i className="ri-github-line text-gray-600"></i>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
